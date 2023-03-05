import React from 'react'
import { useHeaderContext } from '../../../../context/headerContext'

function DesctopNavigation({ list }) {
  const { navigationClass } = useHeaderContext()

  return (
    <nav className="navigation__body">
      { navigationClass === 'fixed-navigation'
          ? <ul className="navigation-list _container">{list}</ul>
          : <ul className="navigation-list">{list}</ul>
      }
    </nav>
  )
}

export default DesctopNavigation
