import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import About from './pages/About/About/About';
import Personal from './pages/About/Personal/Personal';
import Documents from './pages/About/Documents/Documents';
import Libraries from './pages/Libraries/Libraries';
import Questions from './pages/About/Questions/Questions';
import Contacts from './pages/About/Contacts/Contacts';
import LibrariesItem from './pages/Libraries/LibrariesItem/LibrariesItem';
import {pahraLibrary,pahraKidsLibrary,bilovoLibrary,minzagLibrary} from './configurations/librariesPageConfigurations/librariesItemsConfig'
import Events from './pages/Events/Events';
import Clubs from './pages/Clubs/Clubs';
import ClubsList from './pages/Clubs/ClubsList/ClubsList';
import {circusClubs, earlyDevelopmentClubs, artClubs, vocalClubs, danceClubs, theatreClubs, longevityClubs} from './configurations/clubsPageConfigurations/clubsListsConfig'
import Festivals from './pages/Festivals/Festivals';
import SearchingResult from "./pages/SearchingResult/SearchingResult";
import ScrollToTop from "./utils/ScrollToTop";
import NoMatch from "./pages/404/NoMatch";
import {SearchProvider} from "./context/inputSearchContext";
import {HeaderProvider} from './context/headerContext' 
import TiNAO from './pages/10yearsTiNAO/TiNAO';

function App() {
    return (
<HeaderProvider>
  <SearchProvider>
    <Router>
        <ScrollToTop />
        
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/tinao/" component={TiNAO}/>
            <Route path="/about/" component={About} />
            <Route path="/personal/" component={Personal} />
            <Route path="/documents/" component={Documents} />
            <Route path="/questions/" component={Questions} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/libraries/" exact component={Libraries} />
            <Route path="/festivals/" component={Festivals} />
            <Route path="/search/" component={SearchingResult} />


            <Route path="/libraries/pahra-library/">
              <LibrariesItem
                title={pahraLibrary.title}
                subtitle={pahraLibrary.subtitle}
                src={pahraLibrary.src}
                address={pahraLibrary.address}
                worktime={pahraLibrary.worktime}
                phone={pahraLibrary.phone}
                historyText={pahraLibrary.historyText}
                photoSrc1={pahraLibrary.photoSrc1}
                photoSrc2={pahraLibrary.photoSrc2}
                photoSrc3={pahraLibrary.photoSrc3}
                srcToMap={pahraLibrary.srcToMap}
              />
            </Route>

            <Route path="/libraries/pahra-kids-library/">
              <LibrariesItem
                title={pahraKidsLibrary.title}
                subtitle={pahraKidsLibrary.subtitle}
                src={pahraKidsLibrary.src}
                address={pahraKidsLibrary.address}
                worktime={pahraKidsLibrary.worktime}
                phone={pahraKidsLibrary.phone}
                historyText={pahraKidsLibrary.historyText}
                photoSrc1={pahraKidsLibrary.photoSrc1}
                photoSrc2={pahraKidsLibrary.photoSrc2}
                photoSrc3={pahraKidsLibrary.photoSrc3}
                srcToMap={pahraKidsLibrary.srcToMap}
              />
            </Route>

            <Route path="/libraries/bilovo-library/">
              <LibrariesItem
                title={bilovoLibrary.title}
                subtitle={bilovoLibrary.subtitle}
                src={bilovoLibrary.src}
                address={bilovoLibrary.address}
                worktime={bilovoLibrary.worktime}
                phone={bilovoLibrary.phone}
                historyText={bilovoLibrary.historyText}
                photoSrc1={bilovoLibrary.photoSrc1}
                photoSrc2={bilovoLibrary.photoSrc2}
                photoSrc3={bilovoLibrary.photoSrc3}
                srcToMap={bilovoLibrary.srcToMap}
              />
            </Route>

            <Route path="/libraries/minzag-library/">
              <LibrariesItem
                title={minzagLibrary.title}
                subtitle={minzagLibrary.subtitle}
                src={minzagLibrary.src}
                address={minzagLibrary.address}
                worktime={minzagLibrary.worktime}
                phone={minzagLibrary.phone}
                historyText={minzagLibrary.historyText}
                photoSrc1={minzagLibrary.photoSrc1}
                photoSrc2={minzagLibrary.photoSrc2}
                photoSrc3={minzagLibrary.photoSrc3}
                srcToMap={minzagLibrary.srcToMap}
              />
            </Route>

            <Route path="/events/"><Events month="Январь-Февраль"/></Route>
            <Route path="/clubs/" exact component={Clubs}/>

            <Route path="/clubs/early-development/"><ClubsList clubsList={earlyDevelopmentClubs} title={"Раннее развитие"} abbreviated={"Раннее развитие"}/></Route>
            
            <Route path="/clubs/circus/"><ClubsList clubsList={circusClubs} title={"Направления оригинального жанра"} abbreviated={"Оригинальный жанр"}/></Route>

            <Route path="/clubs/art/"><ClubsList clubsList={artClubs} title={"Декоративно-прикладное и изобразительное искусство"} abbreviated={"Арт"}/></Route>

            <Route path="/clubs/music/"><ClubsList clubsList={vocalClubs} title={"Вокальное искусство и музыкальное развитие"} abbreviated={"Музыка"}/></Route>

            <Route path="/clubs/dance/"><ClubsList clubsList={danceClubs} title={"Танцевально-спортивное направление"} abbreviated={"Танцы"}/></Route>

            <Route path="/clubs/theatre/"><ClubsList clubsList={theatreClubs} title={"Театральное искусство"} abbreviated={"Театр"}/></Route>

            <Route path="/clubs/moscow-longevity/"><ClubsList clubsList={longevityClubs} title={"Московское долголетие"} abbreviated={"Московское долголетие"}/></Route>

            <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
    </Router>
  </SearchProvider>
</HeaderProvider>
  );
}

export default App;