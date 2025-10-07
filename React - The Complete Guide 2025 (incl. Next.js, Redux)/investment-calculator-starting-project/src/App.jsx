import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });
  const isInputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!isInputValid && (
        <p className="center">
          Please insert a duration, that is greater than zero!
        </p>
      )}
      {isInputValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
