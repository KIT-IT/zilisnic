import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { useHeaderContext } from '../../context/headerContext';

function Form({title, isPopup}) {
    const [userAnswer, setUserAnswer] = useState('')

    const {setForm, handleFormClose} = useHeaderContext()


    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_nuty03k', 'template_z8jhxzr', e.target, 'user_bqAO18VFx1zRj91J7Pi4f')
            .then((result) => {
                console.log(result.text);
                setUserAnswer('Ваше сообщение было успешно отправленно!')
            }, (error) => {
                setUserAnswer(error.text)
                console.log(error.text);
            });
        e.target.reset()

        if (isPopup) {
            setTimeout(() => {
                setForm(false)
            }, 4000)
        } else {
            setTimeout(() => {
                setUserAnswer('')
            }, 4000)
        }
    }


    return (
       isPopup
        ?  <div className="form-wrapper" onClick={handleFormClose}>
               <div className="form-body">
                   <div className="form-icon">
                       <div className="cl-btn-3" id="form-close" onClick={handleFormClose}>
                           <span className="top"></span>
                           <span className="bot"></span>
                       </div>
                   </div>
                   <div className="form-content-wrapper">
                       <div className="form-title _heading">
                           <div className="form-title__text">{title}</div>
                       </div>
                       <form className="form-main" onSubmit={sendEmail}>
                           <label htmlFor="name">Представтесь,пожалуйста: </label>
                           <input
                               className="form-input input"
                               type="text"
                               name="name"
                               placeholder="Ваше имя"
                           />

                           <label htmlFor="email">Введите ваш Email: </label>
                           <input
                               className="form-input input"
                               type="email"
                               name="email"
                               placeholder="Ваш email"
                           />

                           <label htmlFor="textarea">Введите ваш вопрос: </label>
                           <textarea
                               className="textarea"
                               name="message"
                               cols="30"
                               rows="3"
                               placeholder="Ваше сообщение"
                           />
                           <div className="form-submit">
                               <button className="form-button button" type="submit">Отправить</button>
                               <p className="form-answer">{userAnswer}</p>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
           : <div className="contacts-form">
               <div className="form-title _heading element-with-changing-styles">
                   <div className="form-title__text">{title}</div>
               </div>
               <form className="form-main" onSubmit={sendEmail}>
                   <label htmlFor="name element-with-changing-styles">Представтесь,пожалуйста: </label>
                   <input
                       className="form-input input element-with-changing-styles"
                       type="text"
                       name="name"
                       placeholder="Ваше имя"
                   />

                   <label htmlFor="email element-with-changing-styles">Введите ваш Email: </label>
                   <input
                       className="form-input input element-with-changing-styles"
                       type="email"
                       name="email"
                       placeholder="Ваш email"
                   />

                   <label htmlFor="textarea element-with-changing-styles">Введите ваш вопрос: </label>
                   <textarea
                       className="textarea element-with-changing-styles"
                       name="message"
                       cols="30"
                       rows="3"
                       placeholder="Ваше сообщение"
                   />
                   <div className="form-submit">
                       <button className="form-button button" type="submit">Отправить</button>
                       <p className="form-answer">{userAnswer}</p>
                   </div>
               </form>
           </div>
    );
}

export default Form;