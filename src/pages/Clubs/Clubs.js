import React from 'react'
import { clubsGenres } from '../../configurations/clubsPageConfigurations/clubsGenresConfig'
import GenreItem from './GenreItem/GenreItem'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";

function Clubs() {
    const list = clubsGenres.map(item => {
        return (
            <GenreItem 
                key={item.id}
                title={item.title}
                to={item.to}
                src={item.src}
                clubsCount={item.clubsCount}
                age={item.age}
                gender={item.gender}
                level={item.level}
            />
        )
    })

    const href = require('../../assets/docs/clubs-shedule.pdf')

    return (
        <div className="clubs wrapper">
            <PagePreview
                title={"Клубные Формирования"}
                backgroundImage={require("../../assets/images/backgroundImages/clubsBackground.jpg")}
                isNested={true}
                secondPageName={"Клубы"}
            />
            <div className="clubs-body _container _content">
                <h1 className="_subtitle">Направления</h1>
                <div className="clubs-links">
                <div className="clubs-shedule">
                    <div className="clubs-shedule__title">Расписание занятий</div>
                    <div className="clubs-shedule__document button">
                        <a 
                            className="clubs-shedule__document_link"  
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank">
                                <span className="clubs-shedule__document_text">Открыть</span>
                        </a>
                    </div>
                </div>
                <div className="clubs-shedule">
                    <div className="clubs-shedule__title">Запись в клубные формирования</div>
                    <div className="clubs-shedule__document button">
                        <a 
                            className="clubs-shedule__document_link"  
                            href="https://docs.google.com/forms/d/e/1FAIpQLScgPk2nZU38AadPn0FuHjpbGWrAXpJX59h6XTGkH07NHM3Daw/viewform"
                            rel="noopener noreferrer"
                            target="_blank">
                                <span className="clubs-shedule__document_text">Перейти</span>
                        </a>
                    </div>
                </div>
                </div>
                <ul className="genre-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Clubs
