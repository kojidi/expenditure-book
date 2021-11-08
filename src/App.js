import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowResult from "./components/ShowResult";

const App = () => {
  const [results, setResults] = useState([]);

  const recievedResult = (data) => {
    setResults(results.concat(data));
  };

  return (
    <div className="app">
      <h1>EXPENDITURE BOOK</h1>
      <Form sendResult={recievedResult} resultLength={results.length} />
      {/* <p>
        Copyright © 2021 Hamid Rajabi Kojidi. All Rights Reserved /{" "}
        <a href="https://hamidrajabi.net" target="_blank">
          hamidrajabi.net
        </a>
      </p> */}
      {results !== [] && <ShowResult data={results} />}
    </div>
  );
};

export default App;
