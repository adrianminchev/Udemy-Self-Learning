import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsLayoutPage() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
export default EventsLayoutPage;
