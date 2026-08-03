import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { deleteItem, fetchList } from "../api/resource";
import { getEntity } from "../config/entities";
import { AccordionSection } from "../components/AccordionSection";
import {
  Actions,
  Button,
  ErrorText,
  PageSubtitle,
  PageTitle,
} from "../components/ui";
import { theme } from "../styles/theme";

import { adminPath } from "../paths";
const HOTEL_NAMES = {
  "golden-tulip": "Голден Тюлип",
  "tulip-inn": "Тюлипп Инн",
};

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
`;

const Td = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid ${theme.colors.border};
  vertical-align: middle;
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

export function EntityListPage() {
  const { entityKey } = useParams();
  const [searchParams] = useSearchParams();
  const hotelFilter = searchParams.get("hotel");
  const entity = getEntity(entityKey);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    if (!entity) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchList(entity.key);
      setList(data.list || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [entityKey]);

  const visibleList = useMemo(() => {
    if (entityKey !== "stocks" || !hotelFilter) return list;
    return list.filter((row) =>
      Array.isArray(row.item?.hotels)
        ? row.item.hotels.includes(hotelFilter)
        : true
    );
  }, [list, entityKey, hotelFilter]);

  if (!entity) {
    return <ErrorText>Раздел не найден</ErrorText>;
  }

  const handleDelete = async (item) => {
    if (!window.confirm(`Удалить «${item.label}»?`)) return;
    try {
      await deleteItem(entity.key, item.id);
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const pageTitle =
    entityKey === "stocks" && hotelFilter
      ? `Акции · ${HOTEL_NAMES[hotelFilter] || hotelFilter}`
      : entity.title;

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <PageSubtitle>
        Данные сохраняются в <code>server/data/{entity.key}.json</code>
      </PageSubtitle>

      <Actions style={{ marginBottom: 24 }}>
        <Button as={Link} to={adminPath(`/data/${entity.key}/new`)}>
          Добавить
        </Button>
      </Actions>

      <AccordionSection title="Список" defaultOpen>
        {error && <ErrorText>{error}</ErrorText>}
        {loading ? (
          <Empty>Загрузка…</Empty>
        ) : visibleList.length === 0 ? (
          <Empty>Записей нет</Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Название</Th>
                <Th>ID / ключ</Th>
                <Th>Действия</Th>
              </tr>
            </thead>
            <tbody>
              {visibleList.map((item) => (
                <tr key={item.id}>
                  <Td>{item.label}</Td>
                  <Td>{item.id}</Td>
                  <Td>
                    <RowActions>
                      <SmallButton
                        as={Link}
                        to={
                          entity.key === "hotels"
                            ? adminPath(`/data/hotels/${item.id}/main`)
                            : adminPath(`/data/${entity.key}/${item.id}`)
                        }
                      >
                        Редактировать
                      </SmallButton>
                      <SmallButton
                        type="button"
                        variant="danger"
                        onClick={() => handleDelete(item)}
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
