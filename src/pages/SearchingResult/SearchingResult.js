import React from 'react';
import {Link} from "react-router-dom";
import {useSearchContext} from "../../context/inputSearchContext";


function SearchingResult() {
    const {ar} = useSearchContext()

    const uniqueArr = Array.from(new Set(ar.map(elem => elem.id)))
    .map(id => {
      return ar.find(elem => elem.id === id)
    })
    console.log(uniqueArr);

    return (
        <div className="search-result wrapper">
            <div className="search-result__body _container">
                <div className="search-result__title">
                    {
                        ar.length === 0
                        ? <p className="search-result__title_text">Ничего не найдено </p>
                        : <p className="search-result__title_text">Мы нашли кое-что для вас: </p>
                    }
                </div>
                <div className="search-result__content _content">
                    <ul className="search-result__content_list">
                        {
                            uniqueArr.map(item => {
                                return (
                                    <li key={item.id} className="search-list-item">
                                        <div className="search-list-item__body">
                                        <Link to={item.link} className="search-list-item__link">
                                            <img src={item.src} alt={'background'} className="search-list-item__img"/>
                                            <div className="search-list-item__title">
                                                <span className="search-list-item__title_text">{item.name}</span>
                                            </div>
                                        </Link>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchingResult;