import React from 'react';
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";
import AboutContent from "../About/About/AboutContent/AboutContent";

function Main() {
    return (
     <div className="about wrapper">
        <div className="about__body">
           <PagePreview
               title={"МБУ ЖИЛИЩНИК МОСРЕНТГЕН"}
               backgroundImage={require("../../assets/images/backgroundImages/MSG.jpg")}
               isNested={true}
           />
            {<AboutContent/>}
        </div>
     </div>
    )
}

export default Main;