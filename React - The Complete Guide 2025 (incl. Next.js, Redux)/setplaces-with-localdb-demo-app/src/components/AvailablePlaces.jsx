import Places from "./Places.jsx";
import ErrorConfirmation from "./ErrorConfirmation.jsx";
import { fetchAvailablePlaces } from "../https.js";
import { useFetch } from "../hooks/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    fetchedData: availablePlaces,
    setError,
  } = useFetch(fetchAvailablePlaces, []);

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
