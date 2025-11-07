import logoImg from "../assets/logo.jpg";
import ConfigurableButton from "./UI/ConfigurableButton.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant logo" />
        <h1>React Food Order</h1>
      </div>
      <nav>
        <ConfigurableButton textOnly={true}>Cart (0)</ConfigurableButton>
      </nav>
    </header>
  );
}
