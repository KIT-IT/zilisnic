import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFont} from '@fortawesome/free-solid-svg-icons'
import { useHeaderContext } from '../../../../context/headerContext'


function VisualImpairedSection() {
    const [fontSize, setFontSize] = useState('')
    const [bodyLetterSpacing, setBodyLetterSpacing] = useState('')
    const [bodyLineHeight, setBodyLineHeight] = useState('')
    const [imagesVisual, setImagesVisual] = useState('')
    const imagesNodeList = document.querySelectorAll('img')
    const changingStyles = document.querySelectorAll('.element-with-changing-styles')
    const [background, setBackground] = useState({
        color: '',
        ground: ''
    })

    const links = document.querySelectorAll('a, p')

    const {visualImpaired, setVisualImpaired} = useHeaderContext()


    const handleClick = () => {
        setVisualImpaired(!visualImpaired)
        setDefaultStyles()
    }

    const handleImpaired = () => {
        setVisualImpaired(true)
        if (visualImpaired) {
            const imp = document.querySelector('.visual-impaired')
            imp.classList.toggle('hide-visual-impaired-panel')
        }
    }

    function setDefaultStyles() {         
        document.body.style.fontSize = ''
        document.body.style.color = ''
        document.body.style.background = ''
        document.body.style.letterSpacing = ''
        document.body.style.lineHeight = ''
        imagesNodeList.forEach(img => img.style.display = 'block')
        changingStyles.forEach(elem => elem.style.background = '')
        changingStyles.forEach(elem => elem.style.color = '')
        changingStyles.forEach(elem => elem.style.borderColor = '')
        links.forEach(e => e.style.color = '')
    }

    useEffect(() => {
        document.body.style.fontSize = fontSize
        document.body.style.backgroundColor = background.ground
        document.body.style.color = background.color
        document.body.style.letterSpacing = bodyLetterSpacing
        document.body.style.lineHeight = bodyLineHeight
        imagesNodeList.forEach(img =>  img.style.display = imagesVisual)
        changingStyles.forEach(elem => elem.style.background = background.ground)
        changingStyles.forEach(elem => elem.style.color = background.color)
        changingStyles.forEach(elem => elem.style.borderColor = background.color)
        links.forEach(e => e.style.color = background.color)
        // return () => {
        //     document.body.style = defaultBodyStyles
        //     imagesNodeList.forEach(img => img.style.display = 'block')
        //     console.log('Styles is default');
        // }
    })

    return (
        <div className="visual-impaired">
            <div className="visual-impaired__body _container">
                <div className="visual-impaired-switch-panel default-panel-styles">
                    <span className="visual-impaired-switch-panel__text">Версия для слабовидящих: </span>
                    <button className="visual-impaired-switch-panel__button" onClick={handleClick}>Выкл</button>
                    <button className="visual-impaired-switch-panel__button" onClick={handleImpaired}>Скрыть Меню</button>
                </div>
                <div className="letter-spacing-panel default-panel-styles">
                    <span className="letter-spacing-panel__text">Межбуквенный интервал: </span>
                    <div className="letter-spacing-panel__buttons">
                        <div className="letter-spacing-panel-button">
                            <button className="letter-spacing-panel-button__button" onClick={() => setBodyLetterSpacing('1px')}>Одинарный</button>
                        </div>
                        <div className="letter-spacing-panel-button">
                            <button className="letter-spacing-panel-button__button" onClick={() => setBodyLetterSpacing('1.5px')}>Полуторный</button>
                        </div>
                        <div className="letter-spacing-panel-button">
                            <button className="letter-spacing-panel-button__button" onClick={() => setBodyLetterSpacing('2px')}>Двойной</button>
                        </div>
                    </div>
                </div>
                <div className="font-size-panel default-panel-styles">
                    <span className="font-size-panel__text">Размер шрифта: </span>
                    <div className="font-size-panel__icons">
                        <div className="font-size-panel-icon" onClick={() => setFontSize('17px')}>
                            <FontAwesomeIcon icon={faFont} size={'xs'}/>
                        </div>
                        <div className="font-size-panel-icon" onClick={() => setFontSize('20px')}>
                            <FontAwesomeIcon icon={faFont} size={'sm'} />
                        </div>
                        <div className="font-size-panel-icon" onClick={() => setFontSize('25px')}>
                            <FontAwesomeIcon icon={faFont} size={'lg'}/>
                        </div>
                    </div>
                </div>
                <div className="images-switch-panel default-panel-styles" >
                    <span className="images-switch-panel__text">Изображения: </span>
                    <button className="images-switch-panel__button" onClick={() => imagesVisual === 'none' ? setImagesVisual('block') : setImagesVisual('none')}>Выкл</button>
                </div>
                <div className="line-height-panel default-panel-styles">
                    <span className="line-height-panel__text">Межстрочный интервал: </span>
                    <div className="line-height-panel__buttons">
                        <div className="line-height-panel-button">
                            <button className="line-height-panel-button__button" onClick={() => setBodyLineHeight('1')}>Стандартный</button>
                        </div>
                        <div className="line-height-panel-button">
                            <button className="line-height-panel-button__button" onClick={() => setBodyLineHeight('1.5')}>Средний</button>
                        </div>
                        <div className="line-height-panel-button">
                            <button className="line-height-panel-button__button" onClick={() => setBodyLineHeight('2')}>Большой</button>
                        </div>
                    </div>
                </div>
                <div className="background-panel default-panel-styles">
                    <span className="background-panel__text">Цветовая схема:</span>
                    <div className="background-panel__icons">
                        <div className="background-panel-icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} onClick={() => setBackground({color: 'black', ground: 'white'})}/>
                        </div>
                        <div className="background-panel-icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'white'} onClick={() => setBackground({color: 'white', ground: 'black'})}/>
                        </div>
                        <div className="background-panel-icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#063462'} onClick={() => setBackground({color: '#063462', ground: '#9DD1FF'})}/>
                        </  div>
                        <div className="background-panel-icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#A9E44D'} onClick={() => setBackground({color: '#A9E44D', ground: '#3B2716'})}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualImpairedSection
