export const NAV = [
    {
        id: "hotels",
        label: "Отели",
        hasMenu: true,
        layout: "hotels",
        columns: [
            { title: "Номера и сьюты Голден тюлип", href: "/rooms/golden-tulip" },
            { title: "Услуги отеля Голден тюлип", href: "/services/golden-tulip" },
            { title: "Номера Тюлип инн", href: "/rooms/tulip-inn" },
            { title: "Услуги отеля Тюлип инн", href: "/services/tulip-inn" }
        ]
    },
    {
        id: "activities",
        label: "Активности",
        hasMenu: true,
        layout: "activities",
        columns: [
            {
                title: "Летние Сезон 2026",
                digit: "2026",
                seasonLabel: "Сезон",
                href: "/activities/summer"
            },
            {
                title: "Зимние Сезон 2026",
                digit: "2026",
                seasonLabel: "Сезон",
                href: "/activities/winter"
            }
        ]
    },
    {
        id: "services",
        label: "Услуги",
        hasMenu: true,
        columns: [
            { title: "СПА центр", href: "", image: "home_spa" },
            { title: "Рестораны", href: "/restaurant/golden-tulip" },
            { title: "Конференц залы", href: "/events/venues" },
            { title: "Мероприятия", href: "/events/default" }
        ]
    },
    {
        id: "events",
        label: "События",
        hasMenu: true,
        columns: [
            { title: "Афиша  Роза Хутор", href: "/affiche" },
            { title: "События курорта", href: "/doings" }
        ]
    },
    {
        id: "promos",
        label: "Акции",
        hasMenu: true,
        columns: [
            { title: "Спецпредложения Голден тюлип", href: "/stock/golden-tulip" },
            { title: "Спецпредложения Тюлип инн", href: "/stock/tulip-inn" }
        ]
    },
    {
        id: "contacts",
        label: "Контакты",
        hasMenu: false,
        href: "#contacts"
    }
];