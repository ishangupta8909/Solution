import React, { useState } from "react";

function Fibonacci() {
  const [fromNum, setFromNum] = useState(0);
  const [toNum, setToNum] = useState(0);
  const [fibNums, setFibNum] = useState([]);

  function fibSet(num) {
    setFibNum((prevValue) => {
      return [...prevValue, num];
    });
  }
  function displayFib() {
    let n1 = 0,
      n2 = 1,
      nextTerm;

    if (fromNum <= n1) {
      //   console.log(n1); // print 0
      //   console.log(n2); // print 1
      fibSet(n1);
      fibSet(n2);
    } else if (fromNum <= n2) {
      // console.log(n2);
      fibSet(n2);
    }
    nextTerm = n1 + n2;

    while (nextTerm <= toNum) {
      // print the next term
      if (nextTerm >= fromNum) {
        // console.log(nextTerm);
        fibSet(nextTerm);
      }
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
  }
  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "inputField1") {
      setFromNum(value);
    } else if (name === "inputField2") {
      setToNum(value);
    }
  }

  return (
    <div className="container">
      <input
        onChange={handleChange}
        type="text"
        name="inputField1"
        value={fromNum}
        placeholder="Num1"
      />
      <input
        onChange={handleChange}
        type="text"
        name="inputField2"
        value={toNum}
        placeholder="Num2"
      />
      <button onClick={displayFib} type="submit">
        Submit
      </button>
      )
      <ul>
        {fibNums.map((fibNum) => (
          <li>{fibNum}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fibonacci;
