import React from 'react';
import {Link} from "react-router-dom";
import {AboutLinksConfig} from "../../../../configurations/aboutPageConfigurations/aboutContentConfig";

function AboutLinks() {
    return (
        <div className="about-links _content">
            <div className="about-links__body _container">
                <ul className="about-links-list">
                    {
                        AboutLinksConfig.map(item => {
                            return (
                                <li key={item.id} className="about-links-item">
                                    <Link to={item.to} className="about-links-item__wrapper">
                                        <div className="about-links-item__image">
                                            <div className="about-links-item__image_img" style={{backgroundImage: `url(${item.src})`}}></div>
                                        </div>
                                        <div className="about-links-item__info">
                                            <div className="about-links-item__info_title">{item.text}</div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default AboutLinks;