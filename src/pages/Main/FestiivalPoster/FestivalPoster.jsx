import React from 'react';

export default function FestivalPoster({name, description, dateTime, doc, bg}) {
  return (
    <div className="fest-poster">
      <div className="fest-poster__bg" style={{backgroundImage: `url(${bg})`}}></div>
      <div className="fest-poster__content">
        <div className="fest-poster__content_body _container">
          <div className="fest-poster-main-info">
            <div className="fest-poster-main-info__title">{name}</div>
            <div className="fest-poster-main-info__subtitle">{description}</div>
            <div className="fest-poster-main-info__date">{dateTime}</div>
            <div className="fest-poster-button button">
            <a href={doc} target="_blank" rel="noopener noreferrer" className="fest-poster-button__link">Заявка</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}