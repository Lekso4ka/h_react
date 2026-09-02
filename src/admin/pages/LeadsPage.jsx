import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { deleteLead, downloadLeadFile, fetchLeads } from "../api/leads";
import { getLeadSection } from "../config/leads";
import { AccordionSection } from "../components/AccordionSection";
import { Button, ErrorText, PageSubtitle, PageTitle } from "../components/ui";
import { theme } from "../styles/theme";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 14px 12px;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.gray};
  border-bottom: 1px solid ${theme.colors.border};
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid ${theme.colors.border};
  vertical-align: middle;
`;

const Mono = styled.span`
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
`;

const CellLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.red};
  }
`;

const RowActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const SmallButton = styled(Button)`
  height: 36px;
  padding: 0 14px;
  font-size: 12px;
`;

const Empty = styled.p`
  margin: 0;
  color: ${theme.colors.gray};
`;

function LeadCell({ column, lead, onDownload }) {
  if (column.type === "file") {
    if (!lead.resumeFile) return "—";
    return (
      <CellLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onDownload(lead);
        }}
      >
        {lead.resumeName || "Скачать"}
      </CellLink>
    );
  }
  const value = lead[column.key];
  if (!value) return "—";
  if (column.mono) return <Mono>{value}</Mono>;
  if (column.href) {
    return <CellLink href={`${column.href}:${value}`}>{value}</CellLink>;
  }
  return value;
}

export function LeadsPage() {
  const { leadKey } = useParams();
  const section = getLeadSection(leadKey);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    if (!section) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchLeads(section.key);
      setList(data.list || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [leadKey]);

  if (!section) {
    return <ErrorText>Раздел не найден</ErrorText>;
  }

  const handleDownload = async (lead) => {
    try {
      await downloadLeadFile(lead.id, lead.resumeName);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (lead) => {
    if (!window.confirm(`Удалить заявку «${lead.name}»?`)) return;
    try {
      await deleteLead(lead.id);
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <PageTitle>Заявки · {section.title}</PageTitle>
      <PageSubtitle>
        {loading ? "Загрузка…" : `Всего: ${list.length}`}
      </PageSubtitle>

      <AccordionSection title="Список заявок" defaultOpen>
        {error && <ErrorText>{error}</ErrorText>}
        {loading ? (
          <Empty>Загрузка…</Empty>
        ) : list.length === 0 ? (
          <Empty>{section.empty}</Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                {section.columns.map((column) => (
                  <Th key={column.key}>{column.label}</Th>
                ))}
                <Th>Действия</Th>
              </tr>
            </thead>
            <tbody>
              {list.map((lead) => (
                <tr key={lead.id}>
                  {section.columns.map((column) => (
                    <Td key={column.key}>
                      <LeadCell column={column} lead={lead} onDownload={handleDownload} />
                    </Td>
                  ))}
                  <Td>
                    <RowActions>
                      <SmallButton
                        type="button"
                        variant="danger"
                        onClick={() => handleDelete(lead)}
                      >
                        Удалить
                      </SmallButton>
                    </RowActions>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </AccordionSection>
    </>
  );
}
