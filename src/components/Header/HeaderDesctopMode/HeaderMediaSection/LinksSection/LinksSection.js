import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { linksConfig } from "../../../../../configurations/linksSectionConfiguration/linksConfig";


const LinksSection = ({ cls, color }) =>  {
    const list = linksConfig.map(item => {
        return (
            <li key={item.key} className="links-section-list__item">
                <a className="links-section-list__item_link" href={item.to} target="_blank" rel="noopener noreferrer">
                    <div className="links-section-list__item_icon">
                        <FontAwesomeIcon color={color} className={cls} icon={item.icon} />
                    </div>
                </a>
            </li>
        )
    })


    return (
    <div className="links-section">
        <ul className="links-section-list">
            {list}
        </ul>
    </div>
    )
}

export default LinksSection;