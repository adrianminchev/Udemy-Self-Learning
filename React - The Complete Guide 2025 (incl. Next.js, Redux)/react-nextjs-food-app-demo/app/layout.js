import MainHeader from "./components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Food App Demo",
  description:
    "Food related demo application that lists meals, that are shared by the food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
