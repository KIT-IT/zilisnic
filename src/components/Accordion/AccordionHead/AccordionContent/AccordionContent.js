import React from 'react'


function AccordionContent({ href, text, isDocs }) {
   return (
      <>
        {isDocs
            ?
              <li className="accordion-dropdown-list__documents">
                  <a
                     href={href}
                     rel="noopener noreferrer"
                     target="_blank"
                     className="accordion-dropdown-list__documents_link"
                  >
                  <span className="accordion-dropdown-list__documents_text">{text}</span>
                  </a>
              </li>
            :  <li className="accordion-dropdown-list__paragraph">
                  <p className="accordion-dropdown-list__paragraph_text">{text}</p>
               </li>
        }
      </>
   )
}

export default AccordionContent
