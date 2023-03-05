import ContactsItem from "../../pages/About/Contacts/ContactsItem/ContactsItem";
import React from "react";


export const zvyozdniyCultureCenter = {
    id: 1,
    title: 'Муниципальное Бюджетное Учреждение Культуры Дом Культуры "Звёздный"',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aca072e9bdf2f728de508ecd73657a748accc0f09ac4e55ffa1f1b5a0c0b71f6a&amp;source=constructor',
    address: '108828, Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20',
    worktime: 'Ежедневно с 08.00 до 22.00 без перерыва на обед',
    phone: '+7 (495)850-80-53',
}

export const bilovoCultureCenter = {
    id: 2,
    title: 'Обособленное структурное подразделение Дом Культуры "Юбилейный"',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5b325c639a59be61ec6758462146451a35a1dfdd0a54c138d09e4264d58aa6d8&amp;source=constructor',
    address: '108828, Москва, с.Былово, д.8-а',
    worktime: 'Ежедневно с 10.00 до 20.00 без перерыва на обед',
    phone: '+7 (495) 849-34-85',
}

export const bilovoLibraryContacts = {
    id: 3,
    title: 'Библиотека Былово',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5b325c639a59be61ec6758462146451a35a1dfdd0a54c138d09e4264d58aa6d8&amp;source=constructor',
    address: '108828, Москва, с.Былово, д.8-а',
    worktime: 'с 11-00 до 18-00 Воскресенье, понедельник - выходные дни, последний рабочий день месяца – санитарный день',
    phone: '+7 (495) 849-32-43'
}

export const pahraLibraryContacts = {
    id: 4,
    title: 'Библиотека Красная Пахра',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5e32a382f60a3445ac2e29d47650ea9798e68cbe3a24314960781549af94f9af&amp;source=constructor',
    address: '108828, Москва, п.Краснопахорское, с.Красная Пахра, ул.Почтовая, д.5',
    worktime: 'c 11-00 до 18-00 Воскресенье, понедельник - выходные дни, последний рабочий день месяца – санитарный день',
    phone: '+7 (495) 849-32-35'
}

export const pahraKidsLibraryContacts = {
    id: 4,
    title: 'Библиотека Красная Пахра Детская ',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5e32a382f60a3445ac2e29d47650ea9798e68cbe3a24314960781549af94f9af&amp;source=constructor',
    address: '108828, Москва, п.Краснопахорское, с.Красная Пахра, ул.Почтовая, д.5',
    worktime: 'c 11-00 до 18-00 Воскресенье, понедельник - выходные дни, последний рабочий день месяца – санитарный день',
    phone: '+7 (495) 849-32-25'
}

export const minzagLibraryContacts = {
    id: 5,
    title: 'Библиотека Минзаг',
    srcToMap: 'https://yandex.ru/map-widget/v1/?um=constructor%3A7608b4e8c85656e4d3cdefc79af4824895cebb0d1369ab9837a3b92130890ea7&amp;source=constructor',
    address: 'Москва, поселение Краснопахорское, поселок Минзаг, дом 2, цокольный этаж',
    worktime: 'с 11-00 до 18-00 Воскресенье, понедельник - выходные дни, последний рабочий день месяца – санитарный день',
    phone: '+7 (495) 592-47-39'
}


export const contactsSwitchListConfig = [
    {
        key: 0,
        name: 'ДК Звёздный',
        fun: <ContactsItem title={zvyozdniyCultureCenter.title} srcToMap={zvyozdniyCultureCenter.srcToMap} address={zvyozdniyCultureCenter.address} worktime={zvyozdniyCultureCenter.worktime} phone={zvyozdniyCultureCenter.phone}/>
    },
    {
        key: 1,
        name: 'Библиотека Красная Пахра',
        fun: <ContactsItem title={pahraLibraryContacts.title} srcToMap={pahraLibraryContacts.srcToMap} address={pahraLibraryContacts.address} worktime={pahraLibraryContacts.worktime} phone={pahraLibraryContacts.phone}/>
    },
    {
        key: 2,
        name: 'Библиотека Былово',
        fun: <ContactsItem title={bilovoLibraryContacts.title} srcToMap={bilovoLibraryContacts.srcToMap} address={bilovoLibraryContacts.address} worktime={bilovoLibraryContacts.worktime} phone={bilovoLibraryContacts.phone}/>
    },

    {
        key: 3,
        name: 'ДК Юбилейный',
        fun: <ContactsItem title={bilovoCultureCenter.title} srcToMap={bilovoCultureCenter.srcToMap} address={bilovoCultureCenter.address} worktime={bilovoCultureCenter.worktime} phone={bilovoCultureCenter.phone}/>
    },
    {
        key: 4,
        name: 'Библиотека Пахра Детская',
        fun: <ContactsItem title={pahraKidsLibraryContacts.title} srcToMap={pahraKidsLibraryContacts.srcToMap} address={pahraKidsLibraryContacts.address} worktime={pahraKidsLibraryContacts.worktime} phone={pahraKidsLibraryContacts.phone}/>
    },

    {
        key: 5,
        name: 'Бибилотека Минзаг',
        fun: <ContactsItem title={minzagLibraryContacts.title} srcToMap={minzagLibraryContacts.srcToMap} address={minzagLibraryContacts.address} worktime={minzagLibraryContacts.worktime} phone={minzagLibraryContacts.phone}/>
    }
]