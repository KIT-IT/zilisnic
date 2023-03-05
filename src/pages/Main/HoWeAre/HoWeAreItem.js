import React, { useState } from 'react';

function HoWeAreItem({id, img, info, title_1, title_2, num}) {
    const [text, setText] = useState(false)

    const handleText = () => {
        setText(prev => !prev)
    }

    return (
        <li key={id} className="ho-we-are__list_item" >
            <div className="ho-we-are-item" onMouseEnter={handleText} onMouseLeave={handleText} style={{backgroundImage: `url(${img}`}}>
                <div className="ho-we-are-item__body">
                    <div className="ho-we-are-item__content">
                        {
                            text ?
                            <div className="ho-we-are-item__content_text">
                                {info}
                            </div> : null
                        }

                        <div className="ho-we-are-item__content_title">
                            <span>{title_1}</span>
                            <br/>
                            <span>{title_2}</span>
                        </div>
                        <div className="ho-we-are-item__numbers">
                            <span className="number1">0</span>
                            <span className="number2">{num}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default HoWeAreItem;