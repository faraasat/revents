import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    /* Since we can only return one component so we have to wrap it in a div but in order to remove that uneccessary div we use <Fragment></Fragment> or <></> */
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

// function App() {
//   // if we want to write in pure JS
//   const title = React.createElement("h1", {}, "Revents no JSX");
//   const div = React.createElement("div", { className: "App" }, title);
//   return div;
// }
