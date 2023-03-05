import React, { useContext, useState } from 'react'

const HeaderContext = React.createContext()

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}

export const HeaderProvider =  ({children}) => {
  const [mobile, setMobile] = useState(false)
  const [click, setClick] = useState(false)
  const input  = document.querySelector('#checkbox')
  const [navigationClass, setNavigationClass] = useState("navigation")
  const [arrow, setArrow] = useState(false)
  const [form, setForm] = useState(false)
  const [visualImpaired, setVisualImpaired] = useState(false)


const handleFormOpen = () => {
  setForm(true)
  document.body.style.overflow = "hidden"
}

const handleFormClose = (e) => {
  if (e.target.className === "form-wrapper" || e.target.id === "form-close") {
    setForm(false)
    document.body.style.overflow = "visible"
  }
}

  const handleAutoScrollArrow = () => {
  if (window.pageYOffset >= 500) {
    setArrow(true)
  } else {
    setArrow(false)
  }
}


const handleChangeNavigationClass = () => {
  if (window.pageYOffset >= 400) {
    setNavigationClass("fixed-navigation")
  } else {
    setNavigationClass("navigation")
  }
}

const handleToogleMobileNavigation = () => {
  setClick(!click)
  if (mobile) {
    input.checked = false
  }
}

const handleMobileWidth = () => {
  if (window.innerWidth <= 900) {
    setMobile(true)
  } else {
    setMobile(false)
  }
}

const handleVisualImpairedMode = () => {
  setVisualImpaired(true)
  if (visualImpaired) {
    const imp = document.querySelector('.visual-impaired')
    imp.classList.toggle('hide-visual-impaired-panel')
  }
}


  return (
      <HeaderContext.Provider value={{
        mobile, setMobile,
        click, setClick,
        handleToogleMobileNavigation, 
        handleMobileWidth,
        navigationClass, handleChangeNavigationClass,
        arrow, handleAutoScrollArrow,
        form, setForm, handleFormOpen, handleFormClose, 
        visualImpaired, setVisualImpaired, handleVisualImpairedMode
      }}>
        {children}
      </HeaderContext.Provider>
    )
}

