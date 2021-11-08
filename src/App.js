import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowResult from "./components/ShowResult";

const App = () => {
  const [Results, setResults] = useState([]);

  const recievedResult = (data) => {
    setResults(Results.concat(data));
  };

  return (
    <div className="app">
      <h1>EXPENDITURE BOOK</h1>
      <Form sendResult={recievedResult} />
      {/* <p>
        Copyright © 2021 Hamid Rajabi Kojidi. All Rights Reserved /{" "}
        <a href="https://hamidrajabi.net" target="_blank">
          hamidrajabi.net
        </a>
      </p> */}
      {Results !== [] && <ShowResult data={Results} />}
    </div>
  );
};

export default App;
