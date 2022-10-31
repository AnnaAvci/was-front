import './App.css';
import MainMenu from "./layout/MainMenu/MainMenu";
import HomePage from "./pages/HomePage";
import {Switch, Route} from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import ServicePage from "./pages/ServicePage";
import ConnectionPage from "./pages/Connection/ConnectionPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./layout/Footer/Footer";
import PostDetail from './pages/PostDetail';
import TermsAndConditions from './pages/TermsAndConditions';
import NewMessage from './pages/Messages/NewMessage';
import ReceivedMessages from './pages/Messages/ReceivedMessages';
import SentMessages from './pages/Messages/SentMessages';
import Messages from './pages/Messages/Messages';
import Reservations from './pages/Reservations/Reservations';
import MyProfile from './pages/MyProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/locations"} exact>
          <LocationPage />
        </Route>
        <Route path={"/services"} exact>
          <ServicePage />
        </Route>
        <Route path={"/connection"} exact>
          <ConnectionPage />
        </Route>
        <Route path={"/registration"} exact>
          <RegistrationPage />
        </Route>
        <Route path={"/contact"} exact>
          <ContactPage />
        </Route>
        <Route path={"/postdetail"} exact>
          <PostDetail />
        </Route>
        <Route path={"/terms-and-conditions"} exact>
          <TermsAndConditions />
        </Route>
        <Route path={"/messages"} exact>
          <Messages />
        </Route>
        <Route path={"/messages/new-message"}>
          <NewMessage />
        </Route>
        <Route path={"/messages/received-messages"}>
          <ReceivedMessages />
        </Route>
        <Route path={"/messages/sent-messages"}>
          <SentMessages />
        </Route>
        <Route path={"/reservations"} exact>
          <Reservations />
        </Route>
        <Route path={"/my-profile"} exact>
          <MyProfile />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
