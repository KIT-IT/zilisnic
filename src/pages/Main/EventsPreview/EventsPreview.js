import React from 'react';
import {eventsConfig} from "../../../configurations/eventsPageConfigurations/eventsListConfig";
import {Link} from "react-router-dom";


function EventsPreview() {
    const list = eventsConfig.map((item, index) => {
        if (index >= 0 && index <= 35) {
            return (
                <li key={item.id} className="events-preview-item">
                    <div className="events-preview-item__body">
                        <img src={item.eventsPreviewImg} alt="" className="events-preview-item__image"/>
                        <div className="events-preview-item__content events-preview-main">
                            <div className="events-preview-main__title">
                                <p className="events-preview-main__title_text">{item.eventInfoTitle}</p>
                            </div>
                            <div className="events-preview-main__info">
                                <p className="events-preview-main__info_date">{item.eventInfoDate}</p>
                                <p className="events-preview-main__info_place">{item.eventPlace}</p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        } else {
            return null
        }
    })


    return (
        <div className="events-preview _container">
            <div className="events-preview__body">
                <div className="events-preview-title">
                    <h2 className="events-preview-title__text _subtitle">Ближайшие мероприятия</h2>
                </div>
                <div className="events-preview-content">
                    <div className="events-preview-content__body">
                        <ul className="events-preview-content__list">
                            {list}
                        </ul>
                    </div>
                </div>
                <div className="events-preview-link _content">
                    <Link to={"/events"} className="events-preview-link__button button">
                        <span className="events-preview-link__button_text">Подробнее</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EventsPreview;