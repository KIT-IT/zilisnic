import React, { useState } from 'react'
import PlusToMinus from "../../PlusToMinus/PlusToMinus";

function AccordionHead({ dropdownContent, title, isList }) {
   const [isDrop, setIsDrop] = useState(false)

   const handleDropdown = () => {
      setIsDrop(!isDrop)
   }

   return (
         <li className="accordion-list__item" >
            <div onClick={handleDropdown} className={!isDrop ? "default-accordion-styles element-with-changing-styles" : "pushed-accordion-styles element-with-changing-styles"}>
               <span className="accordion-list__item_text">{title}</span>
               {
                  isDrop
                      ? <PlusToMinus cl={"opened"}/>
                      : <PlusToMinus cl={"closed"}/>
               }
            </div>
            {
               isDrop
                  ? <div className="accordion-dropdown">
                     <div className="accordion-dropdown__body element-with-changing-styles">
                         { isList  
                              ? <ul className="accordion-dropdown-list">
                                    {dropdownContent}
                                 </ul>
                              : <div className="accordion-dropdown-paragraph">{dropdownContent}</div>
                         }
                     </div>
                  </div>
                  : null
            }
         </li>
   )
}

export default AccordionHead
