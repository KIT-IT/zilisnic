import React from 'react'
import {Link} from 'react-router-dom'
import LinksSection from "../Header/HeaderDesctopMode/HeaderMediaSection/LinksSection/LinksSection";
import logo from '../../assets/images/logo.png'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()


    return (
        <div className="footer element-with-changing-styles">
            <div className="footer__body _container">
                <div className="footer__content _content">
                    <div className="footer-nav">
                        <ul className="footer-nav__list first">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/about/'>О Нас</Link>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__item_link" target="_blank" rel="noopener noreferrer" href="https://organizations.kultura.mos.ru/organizations/5074030440.html">Независимая Оценка</a>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/documents/">Правовая Информация</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/questions/">Ответы на часто задаваемые вопросы</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/">Вакансии</Link>
                            </li>
                        </ul>
                        <ul className="footer-nav__list second">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/libraries/'>Библиотеки</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/libraries/pahra-library/">Красная Пахра</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/libraries/pahra-kids-library/">Красная Пахра Детская</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/libraries/bilovo-library/">Былово</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/libraries/minzag-library/">Минзаг</Link>
                            </li>
                        </ul>
                        <ul className="footer-nav__list second">
                            <li className="footer-nav__item-title">
                                <Link className="footer-nav__item-title_text" to='/contacts/'>Контакты</Link>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__item_link" href="tel:+74954241155">+7 (495) 424-11-55</a>
                            </li>
                            <li className="footer-nav__item">
                                <p className="footer-nav__item_link">108820, г.Москва, поселение «Мосрентген», поселок завода Мосрентген, д. 32а</p>
                                <a className="footer-nav__item_link" href="mailto:mbu_mosrentgen75@mail.ru">mbu_mosrentgen75@mail.ru</a>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/contacts/">Все контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-section">
                        <div className="footer-links">
                            <LinksSection cls={"footer-icon"} color={'#fff'} id={'footer-icon'}/>
                        </div>
                        <div className="footer-logo-section">
                            <Link to={"/"}>
                                <img className="footer-logo-section__image" src={logo} alt=""/>
                            </Link>
                        </div>
                        <div className="footer-copyright-section">
                            <div className="footer-copyright-section__body">
                                <p className="footer-copyright-section__text">© 2000-{year} МБУ Жилищник Мосрентген</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;