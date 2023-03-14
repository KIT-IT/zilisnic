import React from 'react'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";

function Libraries() {
    return (
    <div className="lib wrapper">
        <div className="lib__body">
            <PagePreview
                title={"Обслуживаемые объекты"}
                backgroundImage={require("../../assets/images/backgroundImages/objects.jpg")}
                isNested={true}
                secondPageName={"Обслуживаемые объекты"}
            />
        <div className="about-content">
            <div className="about-content__body _container">
                <div className="about-main _block">
                    <div className="about-main__title">
                        <span className="about-main__title_text _subtitle">Под управлением МБУ «ЖИЛИЩНИК МОСРЕНТГЕН»<br /> </span>
                        <span className="about-main__title_text _subtitle">находятся 14 многоквартирных домов расположенные по адресам: </span>
                    </div>
                    <div className="about-main-content-obj">
                        <div className="about-main-content-obj__info">
                            <table className="about-main-content-obj__info-table">
                                <tr><td>1</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 6</td></tr>
                                <tr><td>2</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 7</td></tr>
                                <tr><td>3</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 13</td></tr>
                                <tr><td>4</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 14</td></tr>
                                <tr><td>5</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 16</td></tr>
                                <tr><td>6</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 23</td></tr>
                                <tr><td>7</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 27</td></tr>
                                <tr><td>8</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 28</td></tr>
                                <tr><td>9</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 30</td></tr>
                                <tr><td>10</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 31</td></tr>
                                <tr><td>11</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, д. 32</td></tr>
                                <tr><td>12</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, Музыкальный пр-д, д. 1</td></tr>
                                <tr><td>13</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, Музыкальный пр-д, д. 2</td></tr>
                                <tr><td>14</td><td>г. Москва, п. «Мосрентген», пос. завода Мосрентген, Музыкальный пр-д, д. 3</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Libraries
