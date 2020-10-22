import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);

  return (
    // Semantic UI uses 16 column grid
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
        {/* && means if the first one is true than also make second one true */}
      </Grid.Column>
    </Grid>
  );
}
