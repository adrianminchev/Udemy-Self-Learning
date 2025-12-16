import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const onChangeHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={onChangeHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
