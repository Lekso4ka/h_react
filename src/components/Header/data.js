export const LEFT_NAV = [
    {
        id: "hotels",
        label: "Отели",
        hasMenu: true,
        layout: "hotels",
        brands: [
            {
                title: "ГОЛДЕН ТЮЛИП",
                items: [
                    {
                        label: "НОМЕРА И СЬЮТЫ",
                        href: "/rooms",
                        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        label: "УСЛУГИ ОТЕЛЯ",
                        href: "#services",
                        image: "https://images.unsplash.com/photo-1540555700478-4be289fbbe23?auto=format&fit=crop&w=800&q=80"
                    }
                ]
            },
            {
                title: "ТЮЛИП ИНН",
                items: [
                    {
                        label: "НОМЕРА",
                        href: "/rooms",
                        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        label: "УСЛУГИ ОТЕЛЯ",
                        href: "#services",
                        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
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
            { title: "СПА центр", href: "#", image: "h_banner" },
            { title: "Рестораны", href: "#", image: "h_banner" },
            { title: "Конференц залы", href: "#", image: "h_banner" },
            { title: "Мероприятия", href: "#", image: "h_banner" }
        ]
    },
    {
        id: "events",
        label: "События",
        hasMenu: true,
        columns: [
            { title: "Афиша  Роза Хутор", href: "#", image: "h_banner" },
            { title: "События курорта", href: "#", image: "h_banner" }
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
                title: "ГОЛДЕН ТЮЛИП",
                items: [
                    {
                        label: "НОМЕРА И СЬЮТЫ",
                        href: "/rooms",
                        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        label: "УСЛУГИ ОТЕЛЯ",
                        href: "#services",
                        image: "https://images.unsplash.com/photo-1540555700478-4be289fbbe23?auto=format&fit=crop&w=800&q=80"
                    }
                ]
            },
            {
                title: "ТЮЛИП ИНН",
                items: [
                    {
                        label: "НОМЕРА",
                        href: "/rooms",
                        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        label: "УСЛУГИ ОТЕЛЯ",
                        href: "#services",
                        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                    }
                ]
            }
        ],
        columns: [
            { title: "РАННЕЕ БРОНИРОВАНИЕ", href: "#", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" },
            { title: "WEEKEND", href: "#", image: "https://images.unsplash.com/photo-1520250497591-112f2c40a3b4?auto=format&fit=crop&w=800&q=80" },
            { title: "СПА ПАКЕТЫ", href: "#", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" },
            { title: "СЕМЕЙНЫЙ ОТДЫХ", href: "#", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" }
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