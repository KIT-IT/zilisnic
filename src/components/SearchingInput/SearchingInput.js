import React, { useEffect } from 'react';
import { useSearchContext } from "../../context/inputSearchContext";
import { useHeaderContext } from '../../context/headerContext';
import DesctopSearchingInput from './DesctopSearchingInput/DesctopSearchingInput';
import MobileSearchingInput from './MobileSearchingInput/MobileSearchingInput';


function SearchingInput() {
    const { mobile } = useHeaderContext()
    const { hideInput, inputRef } = useSearchContext()  

    useEffect(() => {
        if(!hideInput) {
            inputRef.current.focus()
        } 
    }, [hideInput]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            {
                mobile 
                ?  <MobileSearchingInput />
                :  <DesctopSearchingInput />
            }
        </>
    );
}

export default SearchingInput;