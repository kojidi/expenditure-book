import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [spender, setSpender] = useState("Hamid");
  // const [check, setCheck] = useState(false);
  const [hamid, setHamid] = useState(false);
  const [gholamreza, setGholamreza] = useState(false);
  const [benyamin, setBenyamin] = useState(false);
  const [hadi, setHadi] = useState(false);

  const hamidHandler = (event) => {
    console.log(event.target.checked);
  };

  const gholamrezaHandler = (event) => {
    console.log(event.target.value);
  };

  const benyaminHandler = (event) => {
    console.log(event.target.value);
  };

  const hadiHandler = (event) => {
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const allBtnHandler = () => {
    // setCheck("checked");
    setHamid(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <div className="selecting-part">
          <div className="inputs-selector">
            <div className="spender-selector">
              <label htmlFor="spender">Spender Name:</label>
              <select id="spender">
                <option value="Hamid">Hamid</option>
                <option value="Gholamreza">Gholamreza</option>
                <option value="Benyamin">Benyamin</option>
                <option value="Hadi">Hadi</option>
              </select>
            </div>

            <div className="money-input">
              <label htmlFor="money">Amount of Money:</label>
              <input id="money" type="number" />
            </div>

            <div className="date-input">
              <label htmlFor="date-picker">Date:</label>
              <input id="date-picker" type="date" />
            </div>

            <div className="for-input">
              <label htmlFor="for-what">For What:</label>
              <input id="for-what" type="text" />
            </div>
          </div>

          <div className="checkbox-selector">
            <h3>For Who:</h3>
            <div>
              <button onClick={allBtnHandler} className="all-btn btn">
                All
              </button>
            </div>
            <div>
              <input onChange={hamidHandler} id="hamid" type="checkbox" />
              <label htmlFor="hamid">Hamid</label>
            </div>
            <div>
              <input
                onChange={gholamrezaHandler}
                id="gholamreza"
                type="checkbox"
              />
              <label htmlFor="gholamreza">Gholamreza</label>
            </div>
            <div>
              <input onChange={benyaminHandler} id="benyamin" type="checkbox" />
              <label htmlFor="benyamin">Benyamin</label>
            </div>
            <div>
              <input onChange={hadiHandler} id="hadi" type="checkbox" />
              <label htmlFor="hadi">Hadi</label>
            </div>
            <div className="buttons">
              <button className=" submit-btn btn" type="submit">
                Submit
              </button>
              <button className="cancel-btn btn">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
