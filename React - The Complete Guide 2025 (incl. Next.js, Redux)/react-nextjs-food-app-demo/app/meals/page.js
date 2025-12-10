import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "./meals-grid";
import { getMeals } from "../lib/meals";
import { notFound } from "next/navigation";

// export const metadata = {
// // Static metadata example
//   title: "All Meals",
//   description:
//     "Food related demo application that lists all of the featured meals, shared by the food-loving community.",
// };
export async function generateMetaData({ params }) {
  // Dynamic metadata example
  const meal = getMeals(params.mealSlug);
  if (!meal) {
    notFound();
  }
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Chose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
