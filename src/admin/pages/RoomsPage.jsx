import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchHotelRooms, deleteRoom } from "../api/rooms";
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

export function RoomsPage() {
  const { hotel } = useParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchHotelRooms(hotel);
      setList(data.list || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [hotel]);

  const handleDelete = async (item) => {
    const label = item.variantLabel
      ? `${item.name} — ${item.variantLabel}`
      : item.name;

    if (!window.confirm(`Удалить номер «${label}»?`)) return;

    try {
      await deleteRoom(item.hotel, item.categoryKey, item.variantKey);
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <PageTitle>Номера и сьюты</PageTitle>
      <PageSubtitle>
        Отель: {HOTEL_NAMES[hotel] || hotel}.
      </PageSubtitle>

      <Actions style={{ marginBottom: 24 }}>
        <Button as={Link} to={adminPath(`/rooms/${hotel}/new`)}>
          Добавить номер
        </Button>
      </Actions>

      <AccordionSection title="Список номеров" defaultOpen>
        {error && <ErrorText>{error}</ErrorText>}
        {loading ? (
          <Empty>Загрузка…</Empty>
        ) : list.length === 0 ? (
          <Empty>Номера не найдены</Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>Название</Th>
                <Th>Вариант</Th>
                <Th>Ключ</Th>
                <Th>Действия</Th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={`${item.categoryKey}-${item.variantKey}`}>
                  <Td>{item.name}</Td>
                  <Td>{item.variantLabel || "—"}</Td>
                  <Td>
                    {item.categoryKey}/{item.variantKey}
                  </Td>
                  <Td>
                    <RowActions>
                      <SmallButton
                        as={Link}
                        to={adminPath(`/rooms/${hotel}/${item.categoryKey}/${item.variantKey}`)}
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
