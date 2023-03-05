import React from 'react';
import { Link } from "react-router-dom";

function PagePreview({backgroundImage, title, secondPageRoute, secondPageName, thirdPageName, isNested = false, isDoubleNested = false}) {
    return (
     <div className="page-preview" style={{backgroundImage: `url(${backgroundImage}`}}>
        <div className="page-preview-block element-with-changing-styles">
            <div className="page-preview__body _container">
                <div className="page-preview__content _container">
                    <div className="page-preview-title">
                        <h1 className="page-preview-title__text _title element-with-changing-styles">{title}</h1>
                    </div>
                    <div className="page-preview-navigation">
                        <div className="page-preview-navigation__body">
                            <Link to={"/"}>
                                <p className="page-preview-navigation__body_link">Главная</p>
                            </Link>
                            {
                                isNested && isDoubleNested
                                    ? <>
                                        <Link to={secondPageRoute}>
                                            <p className="page-preview-navigation__body_link">{secondPageName}</p>
                                        </Link>
                                        {
                                            isDoubleNested
                                                ? <p className="page-preview-navigation__body_link active">{thirdPageName}</p>
                                                : null
                                        }
                                    </>
                                    : <p className="page-preview-navigation__body_link active">{secondPageName}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default PagePreview;