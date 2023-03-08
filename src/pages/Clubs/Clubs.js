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
                title={"Парк техники"}
                backgroundImage={require("../../assets/images/backgroundImages/kamaz.jpeg")}
                isNested={true}
                secondPageName={"Парк Техники"}
            />
            <div className="clubs-body _container _content">
                <h1 className="_subtitle"></h1>
                <div className="clubs-links">

                </div>
                <ul className="genre-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Clubs
