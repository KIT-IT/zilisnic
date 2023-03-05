import React, { useContext, useState, useRef } from "react";
import { searchingInputLinksConfig } from "../configurations/searchingInputLinks/searchingInputLinksConfig";
import { useHeaderContext } from "./headerContext";

const SearchInputContext = React.createContext()

export const useSearchContext = () => {
    return useContext(SearchInputContext)
}

export const SearchProvider = ({children}) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [ar,setAr] = useState([])
    const inputRef = useRef(null)

    const [redirect, setRedirect] = useState(false)
    const [hideInput, setHideInput] = useState(true)

    const { handleToogleMobileNavigation } = useHeaderContext()

    function onKeyDownHandler(event) {
        if (event.key === 'Enter' && searchInputValue !== '') {
            setRedirect(true)
            cleanArr()
            filteredAr()
        }
    }

    function onKeyUpHandler(event) {
        if (event.key === 'Enter') {
            setRedirect(false)
            setSearchInputValue('')
            if(searchInputValue !== '') {
                handleToogleMobileNavigation()
            }
        }
    }

    function showInput() {
        setHideInput(prev => !prev)
        console.log('Show');
    }



    function hideInputByClickOnWindow(e) {
        const targ = e.target
        if (targ.id !== 'search-input') {
            showInput()
        }
    }

    const handleChange = event  => {
        setSearchInputValue(event.target.value)
    }

    const cleanArr = () => setAr([])


    const filteredAr = () => searchingInputLinksConfig.map(item => ( // eslint-disable-next-line array-callback-return
        item.keywords.filter(elem => {
            if (searchInputValue === '') {
               return  null
            } else if (elem.toLowerCase().includes(searchInputValue.toLowerCase())) {
                setAr(prev => (
                    [...prev, {
                        name: item.name,
                        link: item.to,
                        id: item.id,
                        src: item.img
                    }]
                ))
            }
        })
    ))


    return (
        <SearchInputContext.Provider value={{
            handleChange,
            searchInputValue,
            filteredAr,
            ar, 
            setAr,
            setSearchInputValue,
            cleanArr,
            hideInput,
            showInput,
            redirect,
            onKeyUpHandler,
            onKeyDownHandler,
            inputRef,
            setHideInput,
            hideInputByClickOnWindow
        }}>
            {children}
        </SearchInputContext.Provider>
    )
}