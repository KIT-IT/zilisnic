import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import {faChild, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


function FestivalsItem({ title, name, text, backgroundImage, place, date, age, href }) {
 return (
  <li className="festivals-list__item">
    <div className="festivals-preview" style={{backgroundImage: `url(${backgroundImage}`}}>
        <div className="festivals-preview-body _container">
            <div className="festivals-preview-body__info">
                <p className="festivals-preview-body__info_text _heading">{name}</p>
            </div>
        </div>
    </div>
    <div className="festivals-description">
        <div className="festivals-description__main _container">
            <div className="festivals-description-main__body festivals-main _content">
                <div className="festivals-description-main__title _heading element-with-changing-styles">{title}</div>
                <div className="festivals-description-main__name _heading element-with-changing-styles">{name}</div>
                <div className="festivals-description-main__info">
                    <p className="festivals-description-main__info_text">{text}</p>
                </div>
                <div className="festivals-description-main__link button element-with-changing-styles">
                    <a className="festivals-description-main__link_document"
                       href={href}
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                        <span className="festivals-description-main__link_text">Заявка</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="festivals-description__heading element-with-changing-styles">
            <div className="festivals-description__heading_body _container">
                <div className="festivals-description-row _content">
                    <div className="festivals-description-row__item element-with-changing-styles">
                        <FontAwesomeIcon className="festivals-description-row__item_icon element-with-changing-styles" icon={faMapMarkerAlt}/>
                        <p className="festivals-description-row__item_text">{place}</p>
                    </div>
                    <div className="festivals-description-row__item element-with-changing-styles">
                        <FontAwesomeIcon className="festivals-description-row__item_icon element-with-changing-styles" icon={faCalendarAlt}/>
                        <p className="festivals-description-row__item_text">{date}</p>
                    </div>
                    <div className="festivals-description-row__item element-with-changing-styles">
                        <FontAwesomeIcon className="festivals-description-row__item_icon element-with-changing-styles" icon={faChild}/>
                        <p className="festivals-description-row__item_text">{age}</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
  </li>
 )
}

export default FestivalsItem
