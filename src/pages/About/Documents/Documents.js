import React from 'react'
import { documentsData } from '../../../configurations/aboutPageConfigurations/documentsConfig'
import Accordion from '../../../components/Accordion/Accordion'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";

function Documents() {
   return (
         <div className="documents wrapper">
            <PagePreview
                title={"Правовая Информация"}
                backgroundImage={require("../../../assets/images/backgroundImages/documentsBackground.jpg")}
                isNested={true}
                secondPageName={"Документы"}
            />
            <div className="documents__body _container">
               <div className="documents-header _content">
                  {/*<h1 className="documents-header__title _title">Правовая Информация</h1>*/}
                  <ul className="documents-header__info-list">
                     <li className="documents-header__info-list_text"><a className="documents-header__info-list_link" href="/">Документы и общая информация о Муниципальном бюджетном учреждении «Жилищник Мосрентген»</a></li>
                     <li className="documents-header__info-list_text">Полное название: Муниципальное бюджетное учреждение «Жилищник Мосрентген»</li>
                     <li className="documents-header__info-list_text">МБУ «Жилищник Мосрентген»</li>
                     <li className="documents-header__info-list_text">Место нахождения(юридический адрес): 108820, г.Москва, поселение «Мосрентген», поселок завода Мосрентген, д. 32а</li>
                     <li className="documents-header__info-list_text">Фактический (почтовый) адрес: 108820, г.Москва, поселение «Мосрентген», поселок завода Мосрентген, д. 32а</li>
                     <li className="documents-header__info-list_text">Телефон офиса: +7 (495) 424-11-55</li>
                     <li className="documents-header__info-list_text">ОГРН: 1197746360393</li>
                     <li className="documents-header__info-list_text">ИНН: 7751163883</li>
                     <li className="documents-header__info-list_text">КПП: 775101001</li>
                     <li className="documents-header__info-list_text">Номер казначейского счета: 03234643459530007300</li>
                     <li className="documents-header__info-list_text">Лицевой счет: 20736Г38470</li>
                     <li className="documents-header__info-list_text">Наименование банка: ГУ БАНКА РОССИИ ПО ЦФО//УФК ПО Г. МОСКВЕ г. Москва</li>
                     <li className="documents-header__info-list_text">БИК ТОФК: 004525988</li>
                     <li className="documents-header__info-list_text">Единый Казначейский счет: 40102810545370000003</li>
                     <li className="documents-header__info-list_text">ОКВЭД: 68.32.1</li>
                     <li className="documents-header__info-list_text">ОКПО: 39994301</li>
                     <li className="documents-header__info-list_text">Директор: Николаева Екатерина Вячеславовна</li>
                     <li className="documents-header__info-list_text">Главный бухгалтер: Спирина Лариса Львовна</li>
                     <li className="documents-header__info-list_text">E-mail: mbu_mosrentgen75@mail.ru</li>
                  </ul>
               </div>
               <Accordion
                  accordionConfig={documentsData}
                  isDocs={true} 
                  isList={true}
               />
            </div>
         </div>
   )
}

export default Documents
