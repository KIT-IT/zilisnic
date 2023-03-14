import React from 'react'
import img1 from '../../../assets/images/clubsGenres/chetra.jpg'
import img2 from '../../../assets/images/clubsGenres/belarus.jpg'
import img3 from '../../../assets/images/clubsGenres/gazel.jpg'
import img4 from '../../../assets/images/clubsGenres/bobcat.jpg'
import img5 from '../../../assets/images/clubsGenres/gazon.jpg'
import img6 from '../../../assets/images/clubsGenres/belarus320.jpg'

function GenreItem() {
    return (
        <div className="about-content">
        <div className="about-content__body _container">
            <div className="about-main _block">
                <div className="about-main__title">
                    <span className="about-main__title_text _subtitle">Общая информация: </span>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: ЧЕТРА МКСМ</p>
                        <p className="about-main-content__info_text">Предназначение: Мини-погрузчики ЧЕТРА МКСМ — многофункциональная и компактная спецтехника с бортовым поворотом, которая идеально подходит для работ по обслуживанию дорог, уборке тротуаров, аллей и пешеходных дорожек, а также обустройству ландшафтов. Погрузчики являются незаменимыми помощниками при строительных работах и в сельском хозяйстве.</p>
                    </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img1} alt=""/>
                    </div>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: Беларус 82.1</p>
                        <p className="about-main-content__info_text">Предназначение: Трактор предназначен для выполнения различных сельскохозяйственных работ с навесными, полунавесными и прицепными машинами и орудиями, транспортных работ.</p>
                    </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img2} alt=""/>
                    </div>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: Фургон Газель Некст</p>
                        <p className="about-main-content__info_text">Предназначение: Фургон предназначен для перевозки грузов, иногда с возможностью перевозки пассажиров до 3 человек. Грузовое пространство фургонов отделено от пассажирского перегородкой. Отличается высотой кузова и отсутствием обивки в задней его части.</p>
                     </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img3} alt=""/>
                    </div>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: BOBCAT S175</p>
                        <p className="about-main-content__info_text">Предназначение: Применение погрузчика очень широко и включает более 30 видов работ. Часто он применяется в коммунальной сфере за счет возможности установки щеток, скреперов, отвалов, пескоразбрасывателей. Это упрощает работы по уборке улиц в любое время года. Для проведения ландшафтных работ устанавливаются захваты, отвал, косилки, триммер и устройство для удаления пней. Для выполнения экскаваторных работ достаточно просто поменять рабочий орган. В сельском хозяйстве погрузчик перемещает и транспортирует корм или сено, культивирует и обрабатывает землю. Для участия в строительных работах, машина оснащается бетононасосом, буром, гидроножницами, циркулярными пилами, траншеекопателем.</p>
                     </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img4} alt=""/>
                    </div>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: Манипулятор ГАЗон NEXT</p>
                        <p className="about-main-content__info_text">Предназначение: Бортовой ГАЗон NEXT  представляет собой маневренный грузовик, который используют для транспортировки грузов весом до 5 тонн и выполнения погрузочно-разгрузочных работ.</p>
                     </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img5} alt=""/>
                    </div>
                </div>
                <div className="about-main-content">
                    <div className="about-main-content__info">
                        <p className="about-main-content__info_text">Наименование: Беларус 320.4</p>
                        <p className="about-main-content__info_text">Предназначение: Трактор предназначен для выполнения различных работ в сельском хозяйстве в агрегате с навесными, полунавесными и прицепными машинами, в промышленности и на транспорте. Малые габариты, позволяющие применять трактор в теплицах и небольших помещениях..</p>
                     </div>
                    <div className="about-main-content__image">
                        <img className="about-main-content__image_img" src={img6} alt=""/>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  );
}

export default GenreItem
