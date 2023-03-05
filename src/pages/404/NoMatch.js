import React from 'react';
import {Link} from "react-router-dom";
import img from '../../assets/images/backgroundImages/page404.gif'

function NoMatch() {
    return (
        <div className="no-match wrapper">
            <div className="no-match-gif">
                <img src={img} alt="page404" className="no-match-gif__img"/>
            </div>
            <div className="no-match-content _container">
                <h1 className="no-match-content__title">Страница не найдена...</h1>
                <div className="no-match-content__subtitle">Но предлагаем вам вернуться на
                    <Link to={"/"} className="no-match-content__subtitle_link">Главную</Link>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;