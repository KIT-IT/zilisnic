import React from 'react'
import Form from "../../../../components/Form/Form";

function ContactsItem({title, srcToMap, address, worktime, phone}) {
    return (
       <>
            <div className="contacts-item">
                  <div className="contacts-item__body element-with-changing-styles">
                    <div className="contacts-content-body">
                        <div className="contacts-container _container">
                            <div className="contacts-content _content">
                                <div className="contacts-info">
                                    <div className="contacts-info__title">
                                        <h2 className="contacts-info__title_text">{title}</h2>
                                    </div>
                                    <div className="contacts-info__block">
                                        <h2 className="contacts-info__block_title">Адрес: </h2>
                                        <p className="contacts-info__block_text">{address}</p>
                                    </div>
                                    <div className="contacts-info__block">
                                        <h2 className="contacts-info__block_title">Режим-работы: </h2>
                                        <p className="contacts-info__block_text">{worktime}</p>
                                    </div>
                                    <div className="contacts-info__block">
                                        <h2 className="contacts-info__block_title">Телефон: </h2>
                                        <p className="contacts-info__block_text">{phone}</p>
                                    </div>
                                </div>
                                <Form title={"Ваше сообщение"} isPopup={false}/>
                            </div>
                        </div>

                    </div>
                    <div className="contacts-map">
                        <div className="contacts-map__body">
                            <iframe src={srcToMap} width="100%" height="300px" frameBorder="0" title="library"></iframe>
                        </div>
                    </div>
                  </div>
            </div>
       </>
    )
 }
 
 export default ContactsItem