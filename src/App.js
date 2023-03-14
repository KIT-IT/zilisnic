import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import About from './pages/About/About/About';
import Documents from './pages/About/Documents/Documents';
import Libraries from './pages/Libraries/Libraries';
import Contacts from './pages/About/Contacts/Contacts';
import Events from './pages/Events/Events';
import Clubs from './pages/Clubs/Clubs';
import SearchingResult from "./pages/SearchingResult/SearchingResult";
import ScrollToTop from "./utils/ScrollToTop";
import NoMatch from "./pages/404/NoMatch";
import {SearchProvider} from "./context/inputSearchContext";
import {HeaderProvider} from './context/headerContext' 

function App() {
    return (
<HeaderProvider>
  <SearchProvider>
    <Router>
        <ScrollToTop />
        
        <Header/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about/" component={About} />
            <Route path="/documents/" component={Documents} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/libraries/" exact component={Libraries} />
            <Route path="/search/" component={SearchingResult} />
            <Route path="/events/"><Events month="2024 год"/></Route>
            <Route path="/clubs/" exact component={Clubs}/>
            <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
    </Router>
  </SearchProvider>
</HeaderProvider>
  );
}

export default App;