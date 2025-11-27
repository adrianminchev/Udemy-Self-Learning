import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch events data." }),
      { status: 500 }
    );
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

export function eventsLoader() {
  return {
    events: loadEvents(),
  };
}
