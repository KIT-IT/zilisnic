import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faChild, faMapMarkerAlt, faRubleSign} from "@fortawesome/free-solid-svg-icons";

function ClubsListItem({ club, group, age, info, manage, managePhoto, shedule, code, place, price, years, img, summary}) {
    const [addShedule, setAddShedule] = useState(false)

    const handleShedule = () => {
        if (window.innerWidth <= 992) {
            setAddShedule(true)
        } else {
            setAddShedule(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleShedule)
        handleShedule()
        return () => {
            window.removeEventListener('resize', handleShedule)
        }
    }, [])


    return (
        <li className="clubs-list-item">
           <div className="clubs-list-item__body">
               <div className="club-main-content-body">
                <div className="club-main-block">
                    <div className="club-heading">
                        <div className="club-heading__club">
                            <h1 className="club-heading__club_text">{club}</h1>
                        </div>
                        <div className="club-heading__group">
                            <h1 className="club-heading__group_text">{group}</h1>
                        </div>
                        <div className="club-heading__age">
                            <h2 className="club-heading__age_text">{age}</h2>
                        </div>
                        <div className="club-heading__info">
                            <span className="club-heading__info_text">{info}</span>
                        </div>
                    </div>
                    {
                        addShedule
                            ? <div className="club-shedule">
                                <div className="club-shedule__body">
                                    <div className="club-shedule__title">
                                        <div className="club-shedule__title_text">Расписание Занятий</div>
                                        <div className="club-shedule__info">
                                            <p className="club-shedule__info_text">{shedule}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                    <div className="club-manager">
                        <div className="club-manager__body">
                            <div className="club-manager__photo">
                                <img className="club-manager__photo_img" src={managePhoto} alt="manage"/>
                            </div>
                            <div className="club-manager__summary">
                                <div className="club-manager__manage">
                                    <p className="club-manager__manage_title">Руководитель группы:</p>
                                    <p className="club-manager__manage_name">{manage}</p>
                                    <p className="club-manager__manage_summary">{summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="club-poster-block">
                    <div className="club-poster">
                        <div className="club-poster__body">
                            <div className="club-poster__content">
                                <div className="poster-item">
                                    <div className="poster-item__icon">
                                        <FontAwesomeIcon className="poster-item__icon_ico element-with-changing-styles" icon={faMapMarkerAlt}/>
                                    </div>
                                    <p className="poster-item__text">{place}</p>
                                </div>
                                <div className="poster-item">
                                    <div className="poster-item__icon">
                                        <FontAwesomeIcon className="poster-item__icon_ico element-with-changing-styles" icon={faRubleSign}/>
                                    </div>
                                    <p className="poster-item__text">{price}</p>
                                </div>
                                <div className="poster-item">
                                    <div className="poster-item__icon">
                                        <FontAwesomeIcon className="poster-item__icon_ico element-with-changing-styles" icon={faChild}/>
                                    </div>
                                    <p className="poster-item__text">{years}</p>
                                </div>
                                {
                                    addShedule
                                    ? null
                                    : <div className="poster-item">
                                            <div className="poster-item__icon">
                                                <FontAwesomeIcon className="poster-item__icon_ico element-with-changing-styles" icon={faCalendarAlt}/>
                                            </div>
                                            <p className="poster-item__text">{shedule}</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </li>
    )

}

export default ClubsListItem
