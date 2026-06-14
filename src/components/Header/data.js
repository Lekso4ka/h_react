export const LEFT_NAV = [
    {
        id: "hotels",
        label: "Отели",
        hasMenu: true,
        layout: "hotels",
        brands: [
            {
                title: "Голден тюлип",
                items: [
                    {
                        label: "Номера и сьюты",
                        href: "/rooms/golden-tulip",
                        image: "h_gt_3"
                    },
                    {
                        label: "Услуги отеля",
                        href: "/services/golden-tulip",
                        image: "h_gt_13"
                    }
                ]
            },
            {
                title: "Тюлип инн",
                items: [
                    {
                        label: "Номера",
                        href: "/rooms/tulip-inn",
                        image: "h_ti_3"
                    },
                    {
                        label: "Услуги отеля",
                        href: "/services/tulip-inn",
                        image: "h_ti_13"
                    }
                ]
            }
        ]
    },
    {
        id: "activities",
        label: "Активности",
        hasMenu: true,
        layout: "activities",
        columns: [
            {
                title: "Летние",
                digit: "2026",
                seasonLabel: "Сезон",
                href: "/activities/summer",
                image: "summer_2"
            },
            {
                title: "Зимние",
                digit: "2026",
                seasonLabel: "Сезон",
                href: "/activities/winter",
                image: "winter_2"
            }
        ]
    },
    {
        id: "services",
        label: "Услуги",
        hasMenu: true,
        columns: [
            { title: "СПА центр", href: "", image: "h_banner" },
            { title: "Рестораны", href: "/restaurant/golden-tulip", image: "h_banner" },
            { title: "Конференц залы", href: "/events/venues", image: "h_banner" },
            { title: "Мероприятия", href: "/events/default", image: "h_banner" }
        ]
    },
    {
        id: "events",
        label: "События",
        hasMenu: true,
        columns: [
            { title: "Афиша  Роза Хутор", href: "/affiche", image: "do_7" },
            { title: "События курорта", href: "/doings", image: "do_1" }
        ]
    }
];

export const RIGHT_NAV = [
    {
        id: "promos",
        label: "Акции",
        hasMenu: true,
        brands: [
            {
                title: "Голден тюлип",
                items: [
                    {
                        label: "Спецпредложения",
                        href: "/stock/golden-tulip",
                        image: "h_banner"
                    }
                ]
            },
            {
                title: "Тюлип инн",
                items: [
                    {
                        label: "Спецпредложения",
                        href: "/stock/tulip-inn",
                        image: "h_banner"
                    }
                ]
            }
        ]
    },
    {
        id: "contacts",
        label: "Контакты",
        hasMenu: false,
        href: "#contacts"
    }
];

export const ALL_MENU_NAV = [...LEFT_NAV, ...RIGHT_NAV].filter((item) => item.hasMenu);