import React, { useState } from "react";

function LoginRegister(props) {
  const [isLoggedIn, setIsLogin] = useState(false);
  const [inputText, setInputText] = useState({
    userName: "",
    password: ""
  });
  function handleEvent(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      if (name === "Username") {
        return {
          ...prevValue,
          userName: value
        };
      } else if (name === "Password") {
        return {
          ...prevValue,
          password: value
        };
      }
    });
  }
  function handleChange(event) {
    setIsLogin((prevValue) => {
      if (prevValue === true) {
        return false;
      } else if (prevValue === false) {
        return true;
      }
    });
  }

  return (
    <div className="container">
      {isLoggedIn && <h1>Hello {inputText.userName}</h1>}
      <input
        onChange={handleEvent}
        name="Username"
        type="text"
        placeholder="Username"
      />
      <input
        onChange={handleEvent}
        name="Password"
        type="password"
        placeholder="Password"
      />
      <button onClick={handleChange} type="submit">
        Submit
      </button>
    </div>
  );
}
export default LoginRegister;
