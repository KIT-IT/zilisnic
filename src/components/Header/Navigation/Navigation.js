import React, { useEffect } from 'react';
import { navList } from "../../../configurations/navigationLInksConfigurations/navLinkConfig"
import Dropdown from "./NavigationList/Dropdown/Dropdown"
import NavigationList from "./NavigationList/NavigationList"
import MobileNavigation from './MobileNavigation/MobileNavigation'
import { useHeaderContext } from '../../../context/headerContext';
import DesctopNavigation from './DesctopNavigation/DesctopNavigation';

function Navigation() {
    const { mobile, handleMobileWidth } = useHeaderContext()

    useEffect(() => {
        window.addEventListener('resize', handleMobileWidth)
        handleMobileWidth()
        return () => {
            window.removeEventListener('resize', handleMobileWidth)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const list = navList.map(item => {
        return (
            <NavigationList
                to={item.to}
                text={item.text}
                key={item.id}
                isIcon={item.isIcon}
                isDrop={item.isDrop}
                dropdown={
                    item.drop.map(i => {
                        return (
                            <Dropdown
                                text={i.text}
                                to={i.to}
                                key={i.id}
                            />
                        )
                    })
                }
            />
        )
    })

    return (
            mobile
             ? <MobileNavigation list={list} />
             : <DesctopNavigation list={list}/>
            //  : <nav className="navigation__body">
            //         { navigationClass === 'fixed-navigation'
            //             ? <ul className="navigation-list _container">{list}</ul>
            //             : <ul className="navigation-list">{list}</ul>
            //         }
            //     </nav>
    );
}
 
export default Navigation;