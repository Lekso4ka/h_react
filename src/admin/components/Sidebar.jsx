import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

import { adminPath } from "../paths";
import { LEAD_SECTIONS } from "../config/leads";
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${theme.colors.sidebar};
  color: ${theme.colors.beige};
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
`;

const HomeLink = styled(NavLink)`
  flex-shrink: 0;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 246, 240, 0.72);
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(150, 40, 31, 0.35);
    color: ${theme.colors.beige};
  }

  &.active {
    background: ${theme.colors.red};
    color: ${theme.colors.beige};
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

const Head = styled.div`
  flex-shrink: 0;
  height: 82px;
  display: flex;
  align-items: center;
  padding: 0 42px;
  gap: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

const Tab = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $active }) =>
    $active ? theme.colors.beige : "rgba(255, 246, 240, 0.45)"};
  transition: color 0.15s ease;

  &:hover {
    color: ${theme.colors.beige};
  }
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

function classIf(condition) {
  return condition ? "active" : undefined;
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 10.5 12 4l7.5 6.5V20a1 1 0 0 1-1 1h-4.2v-6.2H9.7V21H5.5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sidebar() {
  const { hotel, entityKey, id, section, leadKey } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isLeadsTab = location.pathname.startsWith(adminPath("/leads"));
  const isHomeEditor = location.pathname === adminPath("/home");
  const isMenu = location.pathname === adminPath("/menu");

  const isHotelSection = (hotelId, sectionKey) =>
    classIf(section === sectionKey && id === hotelId);

  const isRooms = (hotelId) => classIf(hotel === hotelId);

  const isActivity = (season) =>
    classIf(entityKey === "activities" && id === season);

  const openTab = (tab) => {
    if (tab === "leads" && !isLeadsTab) {
      navigate(adminPath(`/leads/${LEAD_SECTIONS[0].key}`));
      return;
    }
    if (tab === "sections" && isLeadsTab) {
      navigate(adminPath("/home"));
    }
  };

  return (
    <Aside>
      <HomeLink to={adminPath()} end aria-label="Главная админки">
        <HomeIcon />
      </HomeLink>
      <Head>
        <Tab
          type="button"
          $active={!isLeadsTab}
          onClick={() => openTab("sections")}
        >
          Разделы
        </Tab>
        <Tab
          type="button"
          $active={isLeadsTab}
          onClick={() => openTab("leads")}
        >
          Заявки
        </Tab>
      </Head>
      <NavScroll>
        {isLeadsTab ? (
          <Group>
            {LEAD_SECTIONS.map((item) => (
              <Item
                key={item.key}
                to={adminPath(`/leads/${item.key}`)}
                className={() => classIf(leadKey === item.key)}
              >
                {item.title}
              </Item>
            ))}
          </Group>
        ) : (
          <>
        <Group>
          <Item
            to={adminPath("/home")}
            className={() => classIf(isHomeEditor)}
          >
            Главная страница
          </Item>
        </Group>

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
          <Item
            to={adminPath("/data/stocks")}
            end
            className={() => classIf(entityKey === "stocks")}
          >
            Акции
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
          <Item
            to={adminPath("/menu")}
            className={() => classIf(isMenu)}
          >
            Редактор меню
          </Item>
        </Group>
          </>
        )}
      </NavScroll>
    </Aside>
  );
}
