import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight, faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function MoscowEventsList({type, name, place, date, description, src, to}) {
    return (
        <li className="moscow-event">
            <div className="moscow-event__body">
                <div className="moscow-event__type">
                    <p className="moscow-event__type_text">{type}</p>
                </div>
                <div className="moscow-event__name">
                    <p className="moscow-event__name_text">{name}</p>
                    <a href={to} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className="moscow-event__name_icon"/>
                    </a>
                </div>
                <div className="moscow-event__place">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="moscow-event__place_icon"/>
                    <p className="moscow-event__place__text">{place}</p>
                </div>
                <div className="moscow-event__date">
                    <FontAwesomeIcon icon={faCalendarAlt} className="moscow-event__date_icon"/>
                    <p className="moscow-event__date_text">{date}</p>
                </div>
                <div className="moscow-event-main">
                    <div className="moscow-event__description">
                        <p className="moscow-event__description_text">{description}</p>
                    </div>
                    <div className="moscow-event__image">
                        <img src={src} alt="moscow-events" className="moscow-event__image_img" />
                    </div>
                </div>
            </div>
        </li>
    );
}

export default MoscowEventsList;