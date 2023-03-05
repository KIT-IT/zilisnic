import React from 'react'
import Accordion from '../../../components/Accordion/Accordion'
import { questionsSignUpData,questionsFirstVisitData,questionsPaymentData,questionEventsData } from '../../../configurations/aboutPageConfigurations/questionsConfig'
import PagePreview from "../../../components/PagePrewievImageNavigation/PagePreview";
 
function Questions() {
    return (
          <div className="questions wrapper">
              <PagePreview
                  title={"Ответы на часто возникающие вопросы"}
                  backgroundImage={require("../../../assets/images/backgroundImages/questionsBackground.png")}
                  isNested={true}
                  secondPageName={"Вопросы"}
              />
              <div className="questions__body _container">
                    {/*<div className="questions__title">*/}
                    {/*      <h1 className="_title">Ответы на часто возникающие вопросы</h1>*/}
                    {/*</div>*/}
                    <div className="questions__block _content">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Запись в студии</h2>
                      </div>
                      <Accordion accordionConfig={questionsSignUpData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block _content">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Первое посещение ДК</h2>
                      </div>
                      <Accordion accordionConfig={questionsFirstVisitData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block _content">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Всё об оплате занятий</h2>
                      </div>
                      <Accordion accordionConfig={questionsPaymentData} isDocs={false} isList={false}/>
                    </div>
                    <div className="questions__block _content">
                      <div className="questions__block_title">
                          <h2 className="_subtitle">Мероприятия</h2>
                      </div>
                      <Accordion accordionConfig={questionEventsData} isDocs={false} isList={false}/>
                    </div>
              </div>
          </div>
    )
}

export default Questions
