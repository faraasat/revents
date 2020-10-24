import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);

  return (
    // Semantic UI uses 16 column grid
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
        {/* && means if the first one is true than also make second one true */}
      </Grid.Column>
    </Grid>
  );
}
