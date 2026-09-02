import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { deleteLead, downloadLeadFile, fetchLeads } from "../api/leads";
import { getLeadSection } from "../config/leads";
import { AccordionSection } from "../components/AccordionSection";
import { Button, ErrorText, PageSubtitle, PageTitle } from "../components/ui";
import { theme } from "../styles/theme";

const HEADER_KEYS = new Set(["date", "time", "name"]);
const CONTACT_KEYS = new Set(["phone", "email"]);

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
  word-break: break-word;

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

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.article`
  padding: 22px 24px 24px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  background: ${theme.colors.white};
`;

const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  word-break: break-word;
`;

const CardMeta = styled.p`
  margin: 0;
  color: ${theme.colors.gray};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FieldBlock = styled.div`
  min-width: 0;
`;

const WideFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const FieldLabel = styled.div`
  margin-bottom: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.gray};
`;

const FieldValue = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${theme.colors.text};
  white-space: pre-wrap;
  word-break: break-word;
`;

function asHref(column, value) {
  if (!value) return "";
  if (column.href === "tel" || column.href === "mailto") {
    return `${column.href}:${value}`;
  }
  const text = String(value).trim();
  if (/^https?:\/\//i.test(text)) return text;
  if (/^(t\.me|vk\.com|instagram\.com)\//i.test(text)) return `https://${text}`;
  return "";
}

function LeadValue({ column, lead, onDownload }) {
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

  const href = asHref(column, value);
  if (href) {
    return (
      <CellLink href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {value}
      </CellLink>
    );
  }

  return value;
}

function LeadCards({ columns, list, onDownload, onDelete }) {
  const contactCols = columns.filter((column) => CONTACT_KEYS.has(column.key));
  const detailCols = columns.filter(
    (column) => !HEADER_KEYS.has(column.key) && !CONTACT_KEYS.has(column.key) && !column.wide
  );
  const wideCols = columns.filter((column) => column.wide);

  return (
    <CardList>
      {list.map((lead) => (
        <Card key={lead.id}>
          <CardHead>
            <div>
              <CardTitle>{lead.name || "Без имени"}</CardTitle>
              <CardMeta>
                {[lead.date, lead.time].filter(Boolean).join(" · ")}
              </CardMeta>
            </div>
            <RowActions>
              <SmallButton type="button" variant="danger" onClick={() => onDelete(lead)}>
                Удалить
              </SmallButton>
            </RowActions>
          </CardHead>

          <CardBody>
            {contactCols.length > 0 && (
              <FieldGrid>
                {contactCols.map((column) => (
                  <FieldBlock key={column.key}>
                    <FieldLabel>{column.label}</FieldLabel>
                    <FieldValue>
                      <LeadValue column={column} lead={lead} onDownload={onDownload} />
                    </FieldValue>
                  </FieldBlock>
                ))}
              </FieldGrid>
            )}

            {detailCols.length > 0 && (
              <FieldGrid>
                {detailCols.map((column) => (
                  <FieldBlock key={column.key}>
                    <FieldLabel>{column.label}</FieldLabel>
                    <FieldValue>
                      <LeadValue column={column} lead={lead} onDownload={onDownload} />
                    </FieldValue>
                  </FieldBlock>
                ))}
              </FieldGrid>
            )}

            {wideCols.length > 0 && (
              <WideFields>
                {wideCols.map((column) => (
                  <FieldBlock key={column.key}>
                    <FieldLabel>{column.label}</FieldLabel>
                    <FieldValue>
                      <LeadValue column={column} lead={lead} onDownload={onDownload} />
                    </FieldValue>
                  </FieldBlock>
                ))}
              </WideFields>
            )}
          </CardBody>
        </Card>
      ))}
    </CardList>
  );
}

function LeadTable({ columns, list, onDownload, onDelete }) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <Th key={column.key}>{column.label}</Th>
          ))}
          <Th>Действия</Th>
        </tr>
      </thead>
      <tbody>
        {list.map((lead) => (
          <tr key={lead.id}>
            {columns.map((column) => (
              <Td key={column.key}>
                <LeadValue column={column} lead={lead} onDownload={onDownload} />
              </Td>
            ))}
            <Td>
              <RowActions>
                <SmallButton type="button" variant="danger" onClick={() => onDelete(lead)}>
                  Удалить
                </SmallButton>
              </RowActions>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
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
        ) : section.layout === "cards" ? (
          <LeadCards
            columns={section.columns}
            list={list}
            onDownload={handleDownload}
            onDelete={handleDelete}
          />
        ) : (
          <LeadTable
            columns={section.columns}
            list={list}
            onDownload={handleDownload}
            onDelete={handleDelete}
          />
        )}
      </AccordionSection>
    </>
  );
}
