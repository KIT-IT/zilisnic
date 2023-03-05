import React from 'react';

function AboutLibraries() {
    return (
        <div className="about-libraries _block">
            <div className="about-libraries__body">
                <div className="about-libraries__title">
                    <span className="about-libraries__title_text _subtitle">О библиотечной системе: </span>
                </div>
                <div className="about-libraries-content">
                    <div className="about-libraries-content__info">
                        <span className="about-libraries-content__info_text">В отдельно стоящих зданиях продолжили свою работу библиотеки.Основными направлениями в работе библиотек были и остаются:</span>
                    </div>
                    <ul className="about-libraries-content__list">
                        <li className="about-libraries-content__list_item">Историко-патриотическое воспитание</li>
                        <li className="about-libraries-content__list_item">Экологическое просвещение</li>
                        <li className="about-libraries-content__list_item">Нравственное воспитание</li>
                        <li className="about-libraries-content__list_item">Популяризация художественной литературы</li>
                        <li className="about-libraries-content__list_item">Культурно-досуговая деятельность</li>
                    </ul>
                    <div className="about-libraries-content__description">
                        <span className="about-libraries-content__description_text">Каждый желающий посетитель может не просто взять книгу, но и посетить интересующую его выставку, посвященную как отдельным авторам, так и историческим событиям, и календарным праздникам. Большое количество квизов, литературных гостиных и художественных выставок проходят в Краснопахорской библиотечной системе. Общий книжный фонд всех библиотек составляет 64559 экземпляров книг.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutLibraries;