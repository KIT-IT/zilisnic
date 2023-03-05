import React from 'react';

function NewsPreviewListItem({src, title, description, id}) {
    return (
        <li className="news-list-item">
            <div className="news-list-item__body">
                <div className="news-item-image">
                    <img src={src} alt="news" className="news-item-image__img" />
                </div>
                <div className="news-item-info">
                    <p className="news-item-info__title _heading">{title}</p>
                    <p className="news-item-info__description">{description}</p>
                </div>
            </div>
        </li>
    );
}

export default NewsPreviewListItem;