import React, {useEffect, useState} from 'react'

function ClubsListItem({ club, group, age, info, manage, managePhoto, shedule, code, place, price, years, img, summary}) {
    const [addShedule, setAddShedule] = useState(false)

    const handleShedule = () => {
        if (window.innerWidth <= 992) {
            setAddShedule(true)
        } else {
            setAddShedule(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleShedule)
        handleShedule()
        return () => {
            window.removeEventListener('resize', handleShedule)
        }
    }, [])


    return (
        
    )

}

export default ClubsListItem
