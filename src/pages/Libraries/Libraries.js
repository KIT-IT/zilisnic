import React from 'react'
import {Link} from 'react-router-dom'
import {libraryData} from '../../configurations/librariesPageConfigurations/librariesCardsConfig'
import Accordion from '../../components/Accordion/Accordion'
import { libRulesData } from '../../configurations/librariesPageConfigurations/librariesVisitingRulesConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare  } from  '@fortawesome/free-solid-svg-icons'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";

function Libraries() {
    const list = libraryData.map(lib => {
        return (
            <li className="lib-list__item lib-item element-with-changing-styles" key={lib.id}>
                <Link to={lib.to} >
                    <div className="lib-item__body">
                        <div className="lib-item__head">
                            <img className="lib-item__head_img" src={lib.img} alt={lib.name}/>
                            <div className="image-overlay">
                                <p className="image-overlay__text">Подробнее</p>
                            </div>
                        </div>
                        <p className="lib-item__head_text">{lib.name}</p>
                    </div>
                </Link>  
            </li>
        )
    })

    return (
            <div className="lib wrapper">
                <div className="lib__body">
                    <PagePreview
                        title={"Наши Библиотеки"}
                        backgroundImage={require("../../assets/images/backgroundImages/librariesBackground.jpg")}
                        isNested={true}
                        secondPageName={"Библиотеки"}
                    />
                    <div className="lib-cards">
                        <div className="lib-cards__body _container">
                            <ul className="lib-list">
                                {list}
                            </ul>
                        </div>
                    </div>
                    <div className="lib-services _content element-with-changing-styles">
                        <div className="lib-services-title _container">
                            <h1 className="_subtitle">Услуги</h1>
                        </div>
                        <div className="lib-services-subtitle _container">
                            <h2 className="lib-services-subtitle_text _heading element-with-changing-styles">Предоставление бесплатных услуг</h2>
                        </div>
                        <div className="lib-services-list-body _container">
                            <ul className="lib-services-list ">
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Регистрация пользователей библиотеки</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Выдача для временного пользования документов из имеющегося библиотечного фонда</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Поиск информации в справочно-поисковом аппарате</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Оперативные справочно-библиографические услуги ( за исключением составления тематических списков литературы, предоставления письменных справок справочно-библиографического содержания)</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Информация о библиотеках и центрах научной информации города Москвы с помощью сети Интернет</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Доступ к книжным выставкам из фондов библиотеки</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Предварительный заказ документов, бронирование и продление срока бронирования в читательном зале</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Экскурсионные услуги</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Ксерокопирование</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Печать на принтере</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Сканирование</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Выполнение тематической справки по ресурсам Интернет</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Индивидуальная консультация по поиску в Интернет</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Проведение культурно-массовых мероприятий с привлечением сторонних организаций</p></li>
                                <li className="lib-services-list__item"><FontAwesomeIcon className="lib-services-list__item_icon element-with-changing-styles" icon={faShare}/><p className="lib-services-list__item_text">Предоставление рабочих мест, оборудованных компьютерами для пользователей библиотеки</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lib-rules _container">
                        <div className="lib-rules__body  _content">
                            <div className="lib-rules__title">
                                <h1 className="_subtitle">Правила Посещения</h1>
                            </div>
                            <Accordion accordionConfig={libRulesData} isDocs={false} isList={true}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Libraries
