import React from 'react';
import { mainAbout } from "../../../configurations/mainPageConfigurations/mainAbout";
import HoWeAreItem from "./HoWeAreItem";

function HoWeAre() {

    const list = mainAbout.map(item => {
        return (
            <HoWeAreItem
                key={item.id}
                img={item.img}
                title_1={item.title_1}
                title_2={item.title_2}
                num={item.num}
                info={item.text}
            />
        )
    })

    return (
        <div className="ho-we-are _block">
            <div className="ho-we-are__body _container">
                <div className="ho-we-are__title">
                    <p className="ho-we-are__title_text _subtitle">Наши главные преимущества</p>
                </div>
                <div className="ho-we-are__content">
                    <div className="ho-we-are__content_body">
                        <ul className="ho-we-are__list">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoWeAre;