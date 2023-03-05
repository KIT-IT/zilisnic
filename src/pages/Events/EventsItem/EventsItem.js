import React from 'react'

function EventsItem({id, eventDay, eventDayNumber, eventInfoDate, eventInfoTitle, eventPlace, eventDescription, eventCost,eventsImgSrc}) {
    return (
        <li key={id} className="events-item">
            <div className="events-item__body">
                <div className="events-date">
                    <div className="events-date__body">
                        <p className="events-date__body_day">{eventDay}</p>
                        <p className="events-date__body_number">{eventDayNumber}</p>
                    </div>
                </div>
                <div className="events-main">
                    <div className="events-info">
                        <div className="events-info__body">
                            <div className="events-heading">
                                <div className="events-info-title">
                                    <div className="events-info-title__title">
                                        <h2 className="events-info-title__title_text">{eventInfoTitle}</h2>
                                    </div>
                                </div>
                                <div className="events-info-place">
                                    <p className="events-info-place__text">{eventPlace}</p>
                                </div>
                                <div className="events-info-date">
                                    <div className="events-info-date__date">
                                        <p className="events-info-date__date_text">{eventInfoDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="events-info-description">
                                <div className="events-info-description__body">
                                    <p className="events-info-description__body_text">{eventDescription}</p>
                                </div>
                            </div>
                            <div className="events-info-cost">
                                <p className="events-info-cost__text">{eventCost}</p>
                            </div>
                        </div>
                    </div>
                    <div className="events-image">
                        <img className="events-image__img" src={eventsImgSrc} alt="events"/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventsItem
