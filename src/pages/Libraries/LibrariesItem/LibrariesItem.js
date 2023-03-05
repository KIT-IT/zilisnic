import React from 'react'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function LibrariesItem({title, subtitle, src, address, worktime, phone, historyText, photoSrc1, photoSrc2, photoSrc3, srcToMap}) {
    return (
        <div className="libraries-item ">
            <PagePreview
                title={title}
                backgroundImage={src}
                isNested={true}
                secondPageName={"Библиотеки"}
                isDoubleNested={true}
                secondPageRoute={"/libraries"}
                thirdPageName={title}
            />
            <div className="libraries-item__body _container">
                <div className="libraries-item-content _content">
                    <div className="libraries-item-info">
                        <div className="libraries-item-info__body">
                            <div className="libraries-item-info-container">
                                <h2 className="libraries-item-info-container__title _heading element-with-changing-styles">{subtitle}</h2>
                                <div className="libraries-item-info-container__block">
                                    <p className="libraries-item-info-container__block_address">
                                        <span className="libraries-item-info-container__block_heading">Адрес: </span>{address}
                                    </p>
                                </div>
                                <div className="libraries-item-info-container__block">
                                    <p className="libraries-item-info-container__block_worktime">
                                        <span className="libraries-item-info-container__block_heading">Режим-работы: </span>{worktime}
                                    </p>
                                </div>
                                <div className="libraries-item-info-container__block">
                                    <p className="libraries-item-info-container__block_phone">
                                        <span className="libraries-item-info-container__block_heading">Телефон: </span>{phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="libraries-item-history">
                        <div className="libraries-item-history__body">
                            <p className="libraries-item-history__body_text">{historyText}</p>
                        </div>
                    </div>
                    <div className="libraries-item-images">
                        <div className="libraries-item-images__body">
                            <img src={photoSrc1} alt={title} className="libraries-item-images__body_img"/>
                            <img src={photoSrc2} alt={title} className="libraries-item-images__body_img"/>
                            <img src={photoSrc3} alt={title} className="libraries-item-images__body_img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="libraries-item-map">
                <div className="libraries-item-map__body">
                    <iframe src={srcToMap} width="100%" height="300px" frameBorder="0" title="library"></iframe>
                </div>
            </div>
        </div>
    )
}

export default LibrariesItem
