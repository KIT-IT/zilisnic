import React from 'react'
import ClubsListItem from './ClubsListItem/ClubsListItem'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";


function ClubsList({clubsList, title, abbreviated}) {
    const list = clubsList.map(item => {
        return (
           <ClubsListItem 
                key={item.id}
                club={item.club}
                group={item.group}
                age={item.age}
                info={item.info}
                manage={item.manage}
                summary={item.summary}
                managePhoto={item.managePhoto}
                shedule={item.shedule}
                code={item.code}
                place={item.place}
                price={item.price}
                years={item.years}
           />
        )
    })

    return (
        <div className="clubs-list wrapper">
            <PagePreview
                title={title}
                backgroundImage={require("../../../assets/images/backgroundImages/clubsListBackground.jpg")}
                isNested={true}
                secondPageName={"Клубные Формирования"}
                isDoubleNested={true}
                secondPageRoute={"/clubs"}
                thirdPageName={abbreviated}
            />
            <div className="clubs-list__body">
                <ul className="clubs-list__list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default ClubsList
