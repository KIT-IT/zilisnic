import React from 'react'

function PersonalItem({ src, name, position }) {
   return (
         <li className="personal-item">
            <img className="personal-item__photo" src={src} alt="" />
            <div className="personal-item__description">
               <p className="personal-item__description_name">{name}</p>
               <p className="personal-item__description_position">{position}</p>
            </div>
         </li>
   )
}

export default PersonalItem