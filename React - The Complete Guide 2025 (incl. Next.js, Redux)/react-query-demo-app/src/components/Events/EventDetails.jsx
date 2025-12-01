import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Header from "../Header";
import ErrorBlock from "../UI/ErrorBlock";
import Modal from "../UI/Modal.jsx";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState();
  const id = params.id;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });

      navigate("/events");
    },
  });

  const handleStartDelete = () => setIsDeleting(true);
  const handleStopDelete = () => setIsDeleting(false);

  const handleDelete = () => {
    mutate({ id });
  };

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed ot load event"
          message={
            error.info?.message ||
            "Failed to fetch event data, please try again later."
          }
        />
      </div>
    );
  }

  if (data) {
    const { image, title, location, date, time, description } = data;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    content = (
      <>
        <header>
          <h1>{title}</h1>
          <nav>
            <button type="button" onClick={handleStartDelete}>
              Delete
            </button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img
            src={`http://localhost:3000/${image}`}
            alt={`${title} event image`}
          />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} / {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isPendingDeletion ? (
              <p> Deleting, please wait...</p>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleStopDelete}
                  className="button-text"
                >
                  Cancel
                </button>
                <button type="button" onClick={handleDelete} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isErrorDeleting ? (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deleteError.info?.message ||
                "Failed to delete event, please try again later."
              }
            />
          ) : null}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
