import React from 'react'
import PersonalItem from './PersonalItem/PersonalItem'
import { personalData } from '../../../configurations/aboutPageConfigurations/personalConfig'
import template from '../../../assets/images/pesonalPhoto/template.jpg'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function Personal() {
   const list = personalData.map(i => {
      return (<PersonalItem
         key={i.id}
         src={i.src || template}
         name={i.name}
         position={i.position}
      />
      )
   })


   return (
         <div className="personal wrapper">
             <PagePreview
                 title={"Наша Команда"}
                 backgroundImage={require("../../../assets/images/backgroundImages/teamBackground.jpeg")}
                 isNested={true}
                 secondPageName={"Команда"}
             />
            <div className="personal__body _container">
               <ul className="personal__list _content">
                  {list}
               </ul>
            </div>
         </div>
   )
}

export default Personal
