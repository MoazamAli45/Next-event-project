import React from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import ErrorAlert from "@/components/events/ui/error-alert";
const EventDetails = () => {
  const router = useRouter();
  const eventId = router.query.eventid;
  //  will get an object on basis of id
  // console.log(router.query);
  const event = getEventById(eventId);
  // console.log(event);
  if (!event) {
    return <ErrorAlert>Event not found!</ErrorAlert>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetails;
