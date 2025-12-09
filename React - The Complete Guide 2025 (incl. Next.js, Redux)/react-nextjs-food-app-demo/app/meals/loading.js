import classes from "./loading.module.css"; // currently not being used as it is not placed in root (as it is required by default to be placed there)

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
