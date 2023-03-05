import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {moscowEvents, newsList} from "../../../configurations/mainPageConfigurations/newsListConfig";
import NewsPreviewListItem from "./NewsPreviewListItem/NewsPreviewList";
import MoscowEventsList from "./MoscowEventsList/MoscowEventsList";

function NewsPreview() {
    const list = newsList.map(item => {
        return (
            <NewsPreviewListItem
                key={item.id}
                src={item.src}
                title={item.title}
                description={item.description}
            />
        )
    })


    const moscowNewsList = moscowEvents.map(item => {
        return (
            <MoscowEventsList
                key={item.id}
                type={item.type}
                name={item.name}
                place={item.place}
                date={item.date}
                src={item.src}
                description={item.description}
                to={item.to}
            />
        )
    })

    return (
        <div className="news-preview _block">
            <div className="news-preview__body _container">
                <div className="news-preview-header">
                    <div className="news-preview-header__title">
                        <p className="news-preview-header__title_text _subtitle">Новости</p>
                    </div>
                    <div className="news-preview-header__links">
                        <a href="https://vk.com/dk_zvyozdniy" className="news-preview-header__links_item news-preview-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faVk} className="news-preview-link__icon"/>
                            <p className="news-preview-link__text">Присоединяйтесь к группе в ВКонтакте</p>
                        </a>
                    </div>
                </div>
                <div className="news-preview-content _content">
                    <div className="news-preview-main">
                        <div className="news-preview-main__body">
                            <ul className="news-list">
                                {list}
                            </ul>
                        </div>
                    </div>
                    <div className="news-preview-sidebar">
                        <div className="news-preview-sidebar__body">
                            <div className="news-sidebar-title">
                                <p className="news-sidebar-title__text">Культурный блог "Наш Город"</p>
                            </div>
                            <div className="news-sidebar-subtitle">
                                <p className="news-sidebar-subtitle__text">Самые яркие события Москвы</p>
                            </div>
                            <ul className="news-sidebar-list">
                                { moscowNewsList }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPreview;