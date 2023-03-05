import React from 'react';
import EventsPreview from "./EventsPreview/EventsPreview";
import NewsPreview from "./NewsPreview/NewsPreview";
import HoWeAre from "./HoWeAre/HoWeAre";
//import Carousel from "../../components/Carousel/Carousel";
//import FestivalPoster from './FestiivalPoster/FestivalPoster';
import VideoBanner from '../../components/VideoBanner/VideoBanner';


function Main() {
    return (
        <div className="main wrapper">
           {/* <div className="main-preview">
               <div className="main-preview__body">
                   <div className="main-preview__content">
                       <div className="main-preview__title">
                           <p className="main-preview__title_text _title">Дом культуры "Звёздный"</p>
                       </div>
                       <div className="main-preview__slider">
                           <div className="main-preview__slider_body">
                                <Carousel />
                           </div>
                       </div>
                   </div>
               </div>
           </div> */}
            <VideoBanner />
            <div className="main-content">
                <div className="main-content__body">
                    {<HoWeAre />}
                    {<EventsPreview />}
                    {/* {<FestivalPoster 
                        name={'Поющий май'} 
                        description={'Смотр хоровых коллективов и ансамблей «Поющий май» проводится в рамках Музыкального Фестиваля «Новая Москва» и празднования 10-летия ТиНАО'} 
                        dateTime={'30.04.2022 / 12 : 00'} 
                        doc={require('../../assets/docs/festivals/Поющий-май.docx')}
                        bg={require('../../assets/images/sing-may-poster.jpg')}/>
                    } */}
                    {<NewsPreview />}
                </div>
            </div>
        </div>
    );
}

export default Main;