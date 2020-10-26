import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventFilters from "./EventFilters";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  return (
    // Semantic UI uses 16 column grid
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
        {/* && means if the first one is true than also make second one true */}
      </Grid.Column>
    </Grid>
  );
}
