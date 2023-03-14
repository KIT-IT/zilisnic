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
                                <Link className="footer-nav__item-title_text" to='/about/'>Компания</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to='/libraries/'>Объекты</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to='/events/1/'>Новости</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to='/clubs/'>Парк техники</Link>
                            </li>
                            <li className="footer-nav__item">
                                <Link className="footer-nav__item_link" to="/documents/">Правовая Информация</Link>
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