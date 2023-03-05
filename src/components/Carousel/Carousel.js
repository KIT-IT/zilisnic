import React, {useEffect, useRef, useState} from 'react';
import {mainCarouselConfig} from "../../configurations/mainPageConfigurations/mainCarouselConfig";
import {Link} from "react-router-dom";

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const timer = useRef(null)


    const content = mainCarouselConfig.map(item => {
        return (
            <div className="carousel-item" key={item.id}>
                <div className="carousel-item__body">
                    <div className="carousel-item__title">
                        <p className="carousel-item__title_text">{item.title}</p>
                    </div>
                    <div className="carousel-item__subtitle">
                        <p className="carousel-item__subtitle_text">{item.subtitle}</p>
                    </div>
                    <div className="carousel-item__link button">
                        <Link to={item.to} className="carousel-item__link_body">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        timer.current = setInterval(() => {
            setActiveIndex((current) =>
                current === content.length - 1 ? 0 : current + 1
            )
        }, 3500)
        return () => clearInterval(timer.current)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const prevSlideIndex = activeIndex ? activeIndex - 1 : content.length - 1
    const nextSlideIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1

    function autoSliderStop() {
        clearInterval(timer.current)
    }

    function autoSliderStart() {
        timer.current = setInterval(() => {
            setActiveIndex((current) =>
                current === content.length - 1 ? 0 : current + 1
            )
        }, 3500)
    }


    return (
        <div className="carousel" onMouseEnter={autoSliderStop} onMouseLeave={autoSliderStart}>
            <div className="carousel__item carousel__item_prev" key={prevSlideIndex}>{content[prevSlideIndex]}</div>
            <div className="carousel__item" key={activeIndex}>{content[activeIndex]}</div>
            <div className="carousel__item carousel__item_next" key={nextSlideIndex}>{content[nextSlideIndex]}</div>
        </div>
    )
}

export default Carousel;