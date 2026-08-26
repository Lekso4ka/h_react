import React from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

import { adminPath } from "../paths";
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${theme.colors.sidebar};
  color: ${theme.colors.beige};
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
`;

const Head = styled.div`
  flex-shrink: 0;
  height: 82px;
  display: flex;
  align-items: center;
  padding: 0 42px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const NavScroll = styled.nav`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

const Group = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 8px;
`;

const GroupTitle = styled.div`
  padding: 18px 42px 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 246, 240, 0.55);
`;

const itemStyles = `
  display: block;
  padding: 12px 42px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 246, 240, 0.88);
  transition: background 0.15s ease, color 0.15s ease;
`;

const Item = styled(NavLink)`
  ${itemStyles}

  &:hover {
    background: rgba(150, 40, 31, 0.35);
  }

  &.active {
    background: ${theme.colors.red};
    color: ${theme.colors.beige};
  }
`;

const StaticItem = styled.div`
  ${itemStyles}
  cursor: default;
`;

const TopItem = styled(NavLink)`
  ${itemStyles}
  padding: 24px 42px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  &:hover {
    background: rgba(150, 40, 31, 0.35);
  }

  &.active {
    background: ${theme.colors.red};
    color: ${theme.colors.beige};
  }
`;

function classIf(condition) {
  return condition ? "active" : undefined;
}

export function Sidebar() {
  const { hotel, entityKey, id, section } = useParams();
  const [searchParams] = useSearchParams();
  const hotelFilter = searchParams.get("hotel");

  const isHotelSection = (hotelId, sectionKey) =>
    classIf(section === sectionKey && id === hotelId);

  const isRooms = (hotelId) => classIf(hotel === hotelId);

  const isActivity = (season) =>
    classIf(entityKey === "activities" && id === season);

  const isStocksHotel = (hotelId) =>
    classIf(entityKey === "stocks" && hotelFilter === hotelId);

  return (
    <Aside>
      <Head>Разделы</Head>
      <NavScroll>
        <TopItem to={adminPath()} end>
          Главная страница
        </TopItem>

        <Group>
          <GroupTitle>Голден Тюлип</GroupTitle>
          <Item
            to={adminPath("/data/hotels/golden-tulip/main")}
            className={() => isHotelSection("golden-tulip", "main")}
          >
            Главная страница
          </Item>
          <Item
            to={adminPath("/rooms/golden-tulip")}
            className={() => isRooms("golden-tulip")}
          >
            Номера и сьюты
          </Item>
          <Item
            to={adminPath("/data/hotels/golden-tulip/services")}
            className={() => isHotelSection("golden-tulip", "services")}
          >
            Услуги отеля
          </Item>
        </Group>

        <Group>
          <GroupTitle>Тюлипп Инн</GroupTitle>
          <Item
            to={adminPath("/data/hotels/tulip-inn/main")}
            className={() => isHotelSection("tulip-inn", "main")}
          >
            Главная страница
          </Item>
          <Item to={adminPath("/rooms/tulip-inn")} className={() => isRooms("tulip-inn")}>
            Номера и сьюты
          </Item>
          <Item
            to={adminPath("/data/hotels/tulip-inn/services")}
            className={() => isHotelSection("tulip-inn", "services")}
          >
            Услуги отеля
          </Item>
        </Group>

        <Group>
          <GroupTitle>Активности</GroupTitle>
          <Item
            to={adminPath("/data/activities/summer")}
            className={() => isActivity("summer")}
          >
            Летние
          </Item>
          <Item
            to={adminPath("/data/activities/winter")}
            className={() => isActivity("winter")}
          >
            Зимние
          </Item>
        </Group>

        <Group>
          <GroupTitle>Рестораны</GroupTitle>
          <Item
            to={adminPath("/data/hotels/golden-tulip/restaurant")}
            className={() => isHotelSection("golden-tulip", "restaurant")}
          >
            Голден Тюлип
          </Item>
          <Item
            to={adminPath("/data/hotels/tulip-inn/restaurant")}
            className={() => isHotelSection("tulip-inn", "restaurant")}
          >
            Тюлипп Инн
          </Item>
        </Group>

        <Group>
          <Item
            to={adminPath("/data/venues")}
            end
            className={() => classIf(entityKey === "venues" && !id)}
          >
            Конференц залы
          </Item>
        </Group>

        <Group>
          <GroupTitle>События</GroupTitle>
          <Item
            to={adminPath("/data/affiche")}
            className={() => classIf(entityKey === "affiche")}
          >
            Афиша Роза Хутор
          </Item>
          <Item
            to={adminPath("/data/doings")}
            className={() => classIf(entityKey === "doings")}
          >
            События курорта
          </Item>
        </Group>

        <Group>
          <GroupTitle>Акции</GroupTitle>
          <Item
            to={{ pathname: adminPath("/data/stocks"), search: "?hotel=golden-tulip" }}
            className={() => isStocksHotel("golden-tulip")}
          >
            Голден Тюлип
          </Item>
          <Item
            to={{ pathname: adminPath("/data/stocks"), search: "?hotel=tulip-inn" }}
            className={() => isStocksHotel("tulip-inn")}
          >
            Тюлипп Инн
          </Item>
        </Group>

        <Group>
          <GroupTitle>Правовая информация</GroupTitle>
          <Item
            to={adminPath("/data/legal/info")}
            className={() => classIf(entityKey === "legal" && id === "info")}
          >
            Правовая информация
          </Item>
          <Item
            to={adminPath("/data/legal/rules")}
            className={() => classIf(entityKey === "legal" && id === "rules")}
          >
            Правила отеля
          </Item>
          <Item
            to={adminPath("/data/legal/policy")}
            className={() => classIf(entityKey === "legal" && id === "policy")}
          >
            Политика конфиденциальности
          </Item>
        </Group>

        <Group>
          <StaticItem>Редактор меню</StaticItem>
        </Group>
      </NavScroll>
    </Aside>
  );
}
