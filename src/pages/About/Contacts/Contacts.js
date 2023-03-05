import React, {useEffect, useState} from 'react'
import ContactsItem from './ContactsItem/ContactsItem'
import { zvyozdniyCultureCenter, contactsSwitchListConfig } from '../../../configurations/aboutPageConfigurations/contactsConfig'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function Contacts() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [contacts, setContacts] = useState(null)
    const handleActiveIndex = index => setActiveIndex(index)
    const contactsSwitchList = contactsSwitchListConfig.map((item,index) =>
            <li key={item.key} onClick={() => setContacts(item.fun)} className="contacts-switch-list__item">
                <p className={activeIndex === index ? "contacts-switch-list__item_active" : null} onClick={() => handleActiveIndex(index)}>{item.name}</p>
            </li>
    )

    useEffect(() => {
        setContacts(
            <ContactsItem
                title={zvyozdniyCultureCenter.title}
                srcToMap={zvyozdniyCultureCenter.srcToMap}
                address={zvyozdniyCultureCenter.address}
                worktime={zvyozdniyCultureCenter.worktime}
                phone={zvyozdniyCultureCenter.phone}
            />
        )
    }, [])

    return (
         <div className="contacts wrapper">
             <PagePreview
                 title={"Контакты"}
                 backgroundImage={require("../../../assets/images/backgroundImages/contactsBackground.jpg")}
                 isNested={true}
                 secondPageName={"Контакты"}
             />
            <div className="contacts__body">
                <div className="contacts-switch-panel">
                    <div className="contacts-switch-panel__body _container">
                        <ul className="contacts-switch-list">
                            { contactsSwitchList }
                        </ul>
                    </div>
                </div>
                { contacts }
                <div className="contacts-uchred">
                    <div className="contacts-uchred__body _container">
                        <div className="contacts-uchred__title">Учредитель МБУК «ДК «Звездный» Администрация поселения Краснопахорское</div>
                        <div className="contacts-uchred__info">
                            <div className="contacts-uchred__info-block">
                                <div className="contacts-uchred__info-block_title">Адрес:</div>
                                <div className="contacts-uchred__info-block_info">108828, г. Москва, п. Краснопахорское, с. Красная Пахра, ул. Заводская, д. 25</div>
                            </div>
                            <div className="contacts-uchred__info-block">
                                <div className="contacts-uchred__info-block_title">Телефон:</div>
                                <a className="contacts-uchred__info-block_info" href="tel:+74958508143">+7 (495) 850 – 81 – 43</a>
                            </div>
                            <div className="contacts-uchred__info-block">
                                <div className="contacts-uchred__info-block_title">Mail:</div>
                                <a className="contacts-uchred__info-block_info" href="mailto:krasnopahorsckoe@yandex.ru">krasnopahorsckoe@yandex.ru</a>
                            </div>
                            <div className="contacts-uchred__info-block">
                                <div className="contacts-uchred__info-block_title">Сайт:</div>
                                <a className="contacts-uchred__info-block_info" href="https://krasnaya-pahra.ru/">https://krasnaya-pahra.ru/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Contacts