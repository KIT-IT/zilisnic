import React from 'react'
import { useHeaderContext } from '../../../../context/headerContext'
import SearchingInput from '../../../SearchingInput/SearchingInput'

function MobileNavigation({ list }) {
    const { handleFormOpen, click } = useHeaderContext()

    return (
     click
        ?  <div className="mobile-navigation">
                <div className="mobile-navigation__body">
                    <ul className="mobile-navigation__list">
                        {list}
                    </ul>
                    <SearchingInput />
                    <div className="mobile-navigation__form-link">
                        <button className="header-mobile-version-menu__links_form-button button element-with-changing-styles" onClick={handleFormOpen}>
                            <span className="header-mobile-version-menu__links_form-text">Обратная связь</span>
                        </button>
                    </div>
                    <div className="mobile-navigation__phone-link">
                        <a className="header-mobile-version-menu__links_phone-number" href="tel:+74954241155">+7 (495) 424-11-55</a>
                    </div>
                </div>
            </div>
        : null
            
    )
}

export default MobileNavigation
