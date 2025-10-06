import logo from "../assets/investment-calculator-logo.png";

export default function Header(params) {
  return (
    <header id="header">
      <img src={logo} alt="Main logo showing of a bag filled with money." />
      <h1>Investment Calculator</h1>
    </header>
  );
}
