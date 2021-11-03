import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="selecting-part">
          <div className="inputs-selector">
            <div className="spender-selector">
              <label htmlFor="spender">Spender Name:</label>
              <select id="spender">
                <option>Hamid</option>
                <option>Gholamreza</option>
                <option>Benyamin</option>
                <option>Hadi</option>
              </select>
            </div>

            <div className="money-input">
              <label htmlFor="money">Amount of Money:</label>
              <input id="money" type="number" />
            </div>

            <div className="date-input">
              <label htmlFor="date">Date:</label>
              <input id="date" type="date" />
            </div>

            <div className="for-input">
              <label htmlFor="for-what">For What:</label>
              <input id="for-what" type="text" />
            </div>
          </div>

          <div className="checkbox-selector">
            <h3>For Who:</h3>
            <div>
              <input id="all" type="checkbox" />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input id="hamid" type="checkbox" />
              <label htmlFor="hamid">Hamid</label>
            </div>
            <div>
              <input id="gholamreza" type="checkbox" />
              <label htmlFor="gholamreza">Gholamreza</label>
            </div>
            <div>
              <input id="benyamin" type="checkbox" />
              <label htmlFor="benyamin">Benyamin</label>
            </div>
            <div>
              <input id="hadi" type="checkbox" />
              <label htmlFor="hadi">Hadi</label>
            </div>
            <div className="buttons">
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
