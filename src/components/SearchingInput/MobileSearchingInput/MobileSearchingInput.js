import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import { useSearchContext } from '../../../context/inputSearchContext';


function MobileSearchingInput() {
  const  { handleChange, searchInputValue, hideInput, showInput, redirect, onKeyDownHandler, onKeyUpHandler, inputRef } = useSearchContext()

  return (
    <div className="mobile-info-search">
      {
          redirect
          ? <Redirect to={'/search/'} />
          : null
      }
      {
          hideInput
          ? <FontAwesomeIcon className={"mobile-info-search__img element-with-changing-styles"} icon={faSearch}  color={"#000"} onClick={showInput}/>
          : <FontAwesomeIcon icon={faTimes} className={"mobile-info-search__img"} onClick={showInput} color={"#000"}/>
      } 
      <input 
          ref={inputRef}
          onKeyUp={onKeyUpHandler} 
          onKeyDown={onKeyDownHandler} 
          value={searchInputValue} 
          onChange={handleChange} 
          type="text" 
          className={"mobile-info-search__input input element-with-changing-styles"} 
          placeholder="Введите запрос"
      />   
    </div>
  )
}

export default MobileSearchingInput
