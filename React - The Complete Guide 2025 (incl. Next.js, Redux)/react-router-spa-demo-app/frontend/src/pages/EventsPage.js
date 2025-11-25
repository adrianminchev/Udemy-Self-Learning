import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "First event" },
  { id: "e2", title: "Second event" },
  { id: "e3", title: "Third event" },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={`/events/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
