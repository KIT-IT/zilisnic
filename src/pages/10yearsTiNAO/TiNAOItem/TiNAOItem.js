import React from 'react'
import Icon from '../../../components/Icon/Icon'

function TiNAOItem(props) {
  return (
    <div className="tinao-item">
      <div className="tinao-item__body">
        <div className="tinao-item__decor">
          <img src={props.image} alt="tinao-zvyozdniy" className="tinao-item__decor_img" />
        </div>
        <div className="tinao-item__content">
          <div className="tinao-item__title">
            <span className="tinao-item__title_value">{props.title}</span>
          </div>
          <div className="tinao-item__info">
            <span className="tinao-item__info_text">{props.info}</span>
          </div>
          <div className="tinao-item__links">
            <div className="tinao-item__date">
              <div className="tinao-item__date_icon">
                <Icon name="date" color="#fff" size="30"/>
              </div>
              <div className="tinao-item__date_value">{props.date}</div>
            </div>
            <div className="tinao-item__document">
              {
                !props.document
                ? <p className="tinao-item__document_text">{props.isDone ? 'Итоги' : 'Положение'}</p>
                : <a className="tinao-item__document_link" href={props.document} rel="noopener noreferrer" target="_blank">
                    <span className="tinao-item__document_text">{props.isDone ? 'Итоги' : 'Положение'}</span>
                  </a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiNAOItem
