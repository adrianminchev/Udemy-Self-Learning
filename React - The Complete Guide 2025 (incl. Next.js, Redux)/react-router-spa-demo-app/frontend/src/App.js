import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage, {
  eventsDetailLoader as eventLoader,
  eventDeleteAction as deleteAction,
} from "./pages/EventDetailPage";
import EventsPage, { eventsLoader as loader } from "./pages/EventsPage";
import EventsLayoutPage from "./pages/EventsLayoutPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import MainPage from "./pages/MainPage";
import { newEventAction as eventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./components/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/AuthenticationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayoutPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: eventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: eventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
