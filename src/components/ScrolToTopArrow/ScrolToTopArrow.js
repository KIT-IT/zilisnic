import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function ScrolToTopArrow() {
  const handleScrollToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

  return (
    <div className="scroll-arrow" onClick={handleScrollToTop}><FontAwesomeIcon className="scroll-arrow-icon" icon={faAngleUp} /></div>
  )
}

export default ScrolToTopArrow
