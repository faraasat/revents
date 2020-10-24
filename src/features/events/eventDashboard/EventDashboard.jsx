import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvent(event) {
  //   setEvents([...events, event]); // [...] This will create new array
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvents(
  //     events.map((event) =>
  //       event.id === updatedEvent.id ? updatedEvent : event
  //     )
  //   );
  // }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    // Semantic UI uses 16 column grid
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
        {/* && means if the first one is true than also make second one true */}
      </Grid.Column>
    </Grid>
  );
}
