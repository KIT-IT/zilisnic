import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import { useSearchContext } from '../../../context/inputSearchContext';

function DesctopSearchingInput() {
  const  { handleChange, searchInputValue, hideInput, showInput, redirect, onKeyDownHandler, onKeyUpHandler, inputRef } = useSearchContext()

  return (
    <div className="header-info-search">
            {
                redirect
                ? <Redirect to={'/search/'} />
                : null
            }
            {
                hideInput
                ? <FontAwesomeIcon className={"header-info-search__img element-with-changing-styles"} icon={faSearch}  color={"#fff"} onClick={showInput}/>
                : <FontAwesomeIcon icon={faTimes} className={"header-info-search__img"} onClick={showInput} color={"#fff"}/>
            } 
            {
                hideInput 
                ? null
                : <input 
                    id="search-input"
                    ref={inputRef}
                    onKeyUp={onKeyUpHandler} 
                    onKeyDown={onKeyDownHandler} 
                    value={searchInputValue} 
                    onChange={handleChange} 
                    type="text" 
                    className={"header-info-search__input input element-with-changing-styles"} 
                    placeholder="Введите запрос"/>
            }
        </div>
  )
}

export default DesctopSearchingInput
