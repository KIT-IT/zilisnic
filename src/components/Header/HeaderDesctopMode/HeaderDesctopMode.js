import React from 'react'
import HeaderMediaSection from '../HeaderDesctopMode/HeaderMediaSection/HeaderMediaSection'
import zvzLogo from '../../../assets/images/logo.jpg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import SearchingInput from "../../SearchingInput/SearchingInput";
import ScrolToTopArrow from '../../ScrolToTopArrow/ScrolToTopArrow';
import { useHeaderContext } from '../../../context/headerContext';
import Navigation from "../Navigation/Navigation";

function HeaderDesctopMode() {
  const { handleVisualImpairedMode, handleFormOpen, navigationClass, arrow } = useHeaderContext()

  return (
    <div className="header element-with-changing-styles">
      <HeaderMediaSection />
      <div className="header-main ">
        <div className="header-main-body _container">
          <div className="header-info">
            <div className="header-info-body">
              <div className="header-info-logo">
                <Link to="/">
                    <img className="header-info-logo__img" src={zvzLogo} alt="logo-zvz"/>
                </Link>
              </div>
              <SearchingInput />
              <div className="header-info-contacts">
                <div className="info-glasses" onClick={handleVisualImpairedMode}>
                  <FontAwesomeIcon className="info-glasses__icon element-with-changing-styles"  icon={faGlasses} color={'#fff'} />
                </div>
                <div className="header-info-forms">
                  <button className="header-info-forms__button button element-with-changing-styles" onClick={handleFormOpen}>
                      <span className="header-info-forms__button_text">Обратная связь</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={navigationClass}>
            <Navigation  />
          </div>
        </div>
      </div>
      {
      arrow
        ? <ScrolToTopArrow />
        : null
      }
    </div>
  )
}

export default HeaderDesctopMode
