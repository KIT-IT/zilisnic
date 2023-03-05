export const navList  = [
    {
        type: 'about',
        id: 1,
        to: '/about/',
        text: 'Компания',
        isIcon: true,
        isDrop: true,
        drop: [
/*             {
                id: 1,
                to: '/personal/',
                text: 'Наша Команда'
            }, */
            {
                id: 2,
                to: '/documents/',
                text: 'Правовая Информация'
            },
            {
                id: 3,
                to: '/contacts/',
                text: 'Контакты'
            },
/*             {
                id: 4,
                to: '/questions/',
                text: 'Часто Задоваемые Вопросы'
            } */
        ]
    },
    {
        type: 'libraries',
        id: 2,
        to: '/libraries/',
        text: 'Объекты',
        isIcon: true,
        isDrop: true,
        drop: [
            {
                id: 6,
                to: '/libraries/pahra-library/',
                text: 'Мосрентген'
            },
            {
                id: 7,
                to: '/libraries/pahra-kids-library/',
                text: 'Музыкальный проезд'
            },
/*             {
                id: 8,
                to: '/libraries/bilovo-library/',
                text: 'Былово'
            },
            {
                id: 9,
                to: '/libraries/minzag-library/',
                text: 'Минзаг'
            } */
        ]
    },
    {
        type: 'events',
        id: 3,
        to: '/events/1',
        text: 'Новости',
        isIcon: false,
        isDrop: false,
        drop: []
    },
    {
        type: 'clubs',
        id: 4,
        to: '/clubs/',
        text: 'Парк Техники',
        isIcon: true,
        isDrop: true,
        drop: [
/*             {
                id: 10,
                to: '/clubs/dance/',
                text: 'Танцы'
            },
            {
                id: 11,
                to: '/clubs/art/',
                text: 'Арт'
            },
            {
                id: 12,
                to: '/clubs/music/',
                text: 'Музыка'
            },
            {
                id: 13,
                to: '/clubs/theatre/',
                text: 'Театр'
            },
            {
                id: 14,
                to: '/clubs/circus/',
                text: 'Оригинальный Жанр'
            },
            {
                id: 15,
                to: '/clubs/early-development/',
                text: 'Раннее Развитие'
            },
            {
                id: 16,
                to: '/clubs/moscow-longevity/',
                text: 'Московское Долголетие'
            } */
        ]
    },
    {
        type: 'festivals',
        id: 5,
        to: '/festivals/',
        text: 'История Мосрентгена',
        isIcon: false,
        isDrop: false,
        drop: []
    },
]