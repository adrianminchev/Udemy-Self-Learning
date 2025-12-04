import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "My first NextJS app!",
}; // Reserved name representing the nested metadata page layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} //Represents the content of the page that is currently active
