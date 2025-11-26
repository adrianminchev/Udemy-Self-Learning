import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const errObj = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (errObj.status === 500) {
    message = JSON.parse(errObj.data).message;
  }

  if (errObj.status === 400) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
