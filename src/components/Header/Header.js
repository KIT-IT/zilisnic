import React, { useEffect } from 'react'
import VisualImpairedSection from './HeaderDesctopMode/VisualImpairedSection/VisualImpairedSection'
import Form from "../Form/Form";
import { useHeaderContext } from '../../context/headerContext';
import HeaderDesctopMode from './HeaderDesctopMode/HeaderDesctopMode';
import HeaderMobileMode from './HeaderMobileMode/HeaderMobileMode';


function Header() {
    const { handleMobileWidth, mobile, handleChangeNavigationClass, handleAutoScrollArrow, form, visualImpaired } = useHeaderContext()

    useEffect(() => {
        window.addEventListener('resize', handleMobileWidth)
        document.addEventListener('scroll', handleAutoScrollArrow)
        document.addEventListener('scroll', handleChangeNavigationClass)
        handleMobileWidth()
        return () => {
            window.removeEventListener('resize', handleMobileWidth)
            document.removeEventListener('scroll', handleAutoScrollArrow)
            document.removeEventListener('scroll', handleChangeNavigationClass)
        }
    }, [mobile]) // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <div className="con">
          { form ? <Form title={"Ваше сообщение"} isPopup={true} /> : null}
          { visualImpaired ? <VisualImpairedSection /> : null}
          {
            mobile
            ? <HeaderMobileMode />
            : <HeaderDesctopMode />
            }
        </div>
    );
}

export default Header;