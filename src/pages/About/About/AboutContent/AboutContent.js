import React from 'react'

function AboutContent() {

    return (
        <div className="about-content">
            <div className="about-content__body _container">
                <div className="about-main _block">
                    <div className="about-main__title">
                        <span className="about-main__title_text _subtitle">Контактная информация и режим работы:</span>
                    </div>
                    <div className="about-main-content">
                        <div className="about-main-content__info">
                            <table>
                                <tr><td>Наименование</td><td>МБУ «Жилищник Мосрентген»</td></tr>
                                <tr><td>Директор</td><td>Николаева Екатерина Вячеславовна</td></tr>
                                <tr><td>Гл. бухгалтер</td><td>Спирина Лариса Львовна</td></tr>
                                <tr><td>Адрес</td><td>108820, г.Москва, поселение «Мосрентген», поселок завода Мосрентген, д. 32а</td></tr>
                                <tr><td>Телефон офиса</td><td>+7 (495) 424-11-55</td></tr>
                                <tr><td>Телефон диспетчерской службы</td><td>+7 (495) 339-00-60</td></tr>
                                <tr><td>E-mail</td><td>mbu_mosrentgen75@mail.ru</td></tr>
                                <tr><td>ИНН</td><td>7751163883</td></tr>
                            </table>
                        </div>
                        <div className="about-main-content__info">
                            <table>
                                <tr><td>Понедельник</td><td>09.00 - 18.00  Обед 13.00-14.00</td></tr>
                                <tr><td>Вторник</td><td>09.00 - 18.00  Обед 13.00-14.00</td></tr>
                                <tr><td>Среда</td><td>09.00 - 18.00  Обед 13.00-14.00</td></tr>
                                <tr><td>Четверг</td><td>09.00 - 18.00  Обед 13.00-14.00</td></tr>
                                <tr><td>Пятница</td><td>09.00 - 17.00  Обед 13.00-14.00</td></tr>
                                <tr><td>Суббота</td><td>Выходной</td></tr>
                                <tr><td>Воскресенье</td><td>Выходной</td></tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="about-main _block">
                    <div className="about-main__title">
                        <span className="about-main__title_text _subtitle">Прием паспортного стола: </span>
                    </div>
                    <div className="about-main-content">
                        <div className="about-main-content__info">
                            <table>
                                <tr><td>Среда</td><td>09.00 - 18.00  Обед 13.00-14.00</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;