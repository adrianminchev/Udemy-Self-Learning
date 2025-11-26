import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const eventsData = useLoaderData();

  if (eventsData.isError) {
    return <p>{eventsData.message}</p>;
  }

  return <EventsList events={eventsData.events} />;
}

export default EventsPage;

export async function dataLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch events data." };
  } else {
    return response;
  }
}
