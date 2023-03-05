import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild, faLevelUpAlt, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'

function GenreItem({title, to, src, clubsCount, age, gender, level}) {
    return (
        <li className="genre-list__item genre-item element-with-changing-styles">
            <Link to={to} >
                <div className="genre-item__body">
                    <div className="genre-item__head">
                        <img className="genre-item__head_img" src={src} alt="clubs"/>
                        <div className="genre-image-overlay">
                            <p className="genre-image-overlay__text">Подробнее</p>
                        </div>
                    </div>
                    <div className="genre-item__info">
                        <p className="genre-item__info_title">{title}</p>
                        <div className="genre-item__info_content">
                            <div className="genre-item-content-block">
                                <p className="genre-item-content-block__clubs-count">Колличество Студий: {clubsCount}</p>
                            </div>
                            <div className="genre-item-content-block">
                                <div className="genre-item-content-block__icon">
                                    <FontAwesomeIcon icon={faSortAmountDownAlt} className="genre-item-content-block__icon_ico element-with-changing-styles"/>
                                </div>
                                <p className="genre-item-content-block__age">{age}</p>
                            </div>
                            <div className="genre-item-content-block">
                                <div className="genre-item-content-block__icon">
                                    <FontAwesomeIcon icon={faChild} className="genre-item-content-block__icon_ico element-with-changing-styles"/>
                                </div>
                                <p className="genre-item-content-block__gender">{gender}</p>
                            </div>
                            <div className="genre-item-content-block">
                                <div className="genre-item-content-block__icon">
                                    <FontAwesomeIcon icon={faLevelUpAlt} className="genre-item-content-block__icon_ico element-with-changing-styles"/>
                                </div>
                                <p className="genre-item-content-block__level">{level}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default GenreItem
