import React from "react";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "./../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
const EventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    //  navigate programmatically to slug page
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default EventsPage;
