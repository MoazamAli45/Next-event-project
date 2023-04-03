import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "./../components/events/event-list";
import EventsSearch from "@/components/events/event-search";

export default function Home() {
  //  stroring events
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      {/* <EventsSearch /> */}
      <EventList items={featuredEvents} />
    </>
  );
}
