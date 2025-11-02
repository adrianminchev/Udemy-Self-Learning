import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorConfirmation from "./ErrorConfirmation.jsx";
import { fetchAvailablePlaces } from "../https.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState([]);
  const [setError, isSetError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        setAvailablePlaces(places);
      } catch (err) {
        isSetError({
          message:
            err.message || "Could not fetch places, please try again later!",
        });
      }

      setIsFetching(false);
    }
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });

    fetchPlaces();
  }, []);

  if (setError) {
    return (
      <ErrorConfirmation
        title="An error occurred!"
        message={setError.message}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
