import React, { useState} from 'react'
import { eventsConfig } from '../../configurations/eventsPageConfigurations/eventsListConfig'
import EventsItem from './EventsItem/EventsItem'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";
import Pagination from "../../components/Pagination/Pagination";

function Events({month}) {
    const list = eventsConfig.map(item => {
        return (
            <EventsItem 
                key={item.id}
                eventDay={item.eventDay}
                eventDayNumber={item.eventDayNumber}
                eventInfoDate={item.eventInfoDate}
                eventInfoTitle={item.eventInfoTitle}
                eventDescription={item.eventDescription}
                eventPlace={item.eventPlace}
                eventCost={item.eventCost}
                eventsImgSrc={item.eventImgSrc}
                id={item.id}
            />
        )
    })

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)
    const [activeIndex, setActiveIndex] = useState(1)


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        setActiveIndex(pageNumber)
    }

    

    return (
        <div className="events wrapper">
            <PagePreview
                title={"Новости"}
                backgroundImage={require("../../assets/images/backgroundImages/man-reading-newspaper.jpg")}
                isNested={true}
                secondPageName={"Новости"}
            />
            <div className="events__body _container">
                <div className="events-content">
                    <div className="events__month">
                        <h2 className="events__month_title _subtitle">{month}</h2>
                    </div>
                    <div className="events-content">
                        <ul className="events-list">
                            {currentPosts}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="events-pagination">
                <Pagination postPerPage={postsPerPage} totalPosts={list.length} paginate={paginate} activeIndex={activeIndex} />
            </div>
        </div>
    )
}

export default Events