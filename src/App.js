import './App.css';
import MainMenu from "./layout/MainMenu/MainMenu";
import HomePage from "./pages/HomePage";
import {Switch, Route} from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import ServicePage from "./pages/ServicePage";
import ConnectionPage from "./pages/ConnectionPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./layout/Footer/Footer";
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <div className="App">
        <MainMenu/>
        <Switch>
            <Route path={"/"} exact>
                <HomePage/>
            </Route>
            <Route path={"/locations"} exact>
                <LocationPage/>
            </Route>
            <Route path={"/services"} exact>
                <ServicePage/>
            </Route>
            <Route path={"/connection"} exact>
                <ConnectionPage/>
            </Route>
            <Route path={"/registration"} exact>
                <RegistrationPage/>
            </Route>
            <Route path={"/contact"} exact>
                <ContactPage/>
            </Route>
            <Route path={"/postdetail"}>
                <PostDetail/>
            </Route>
          </Switch>
          <Footer/>

    </div>
  );
}

export default App;
