import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/sandbox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import ProfilePage from "../../features/profiles/profilePage/ProfilePage";

export default function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content="Loading App..." />;

  return (
    /* Since we can only return one component so we have to wrap it in a div but in order to remove that uneccessary div we use <Fragment></Fragment> or <></> */
    <>
      <Route exact path="/" component={HomePage} />
      {/* this says if we have / + something we will render it differently */}
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <ToastContainer position="bottom-right" hideProgressBar />
            <ModalManager />
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/event/:id" component={EventDetailedPage} />
              {/* to open same component on different routes */}
              <Route
                key={key}
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
              <Route path="/account" component={AccountPage} />
              <Route path="/profile/:id" component={ProfilePage} />
              <Route path="/error" component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}

// function App() {
//   // if we want to write in pure JS
//   const title = React.createElement("h1", {}, "Revents no JSX");
//   const div = React.createElement("div", { className: "App" }, title);
//   return div;
// }
