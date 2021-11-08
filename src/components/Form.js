import React, { useState, useReducer, useEffect } from "react";
import "./Form.css";

const checkboxReducer = (state, action) => {
  let initialChecked = false;

  if (action.type === "CHECKED_IT") {
    initialChecked = true;
  }

  return state.map((person) => {
    if (person.id === action.id) {
      return { ...person, checked: initialChecked };
    } else {
      return person;
    }
  });
};

const Form = (props) => {
  const dataLength = props.resultLength;
  // console.log(dataLength);
  const persons = [
    { id: 1, name: "Hamid", checked: false },
    { id: 2, name: "Gholamreza", checked: false },
    { id: 3, name: "Benyamin", checked: false },
    { id: 4, name: "Hadi", checked: false },
  ];

  const [spender, setSpender] = useState("Hamid");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState("");
  const [forWhat, setForWhat] = useState("");
  const [people, setPeople] = useState("");

  const [forWhos, dispatch] = useReducer(checkboxReducer, persons);

  const checkedHandler = (person) => {
    dispatch({
      type: person.checked ? "UNCHECKED_IT" : "CHECKED_IT",
      id: person.id,
    });
  };

  const spenderHandler = (event) => {
    setSpender(event.target.value);
  };

  const moneyHandler = (event) => {
    setMoney(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const forWhatHandler = (event) => {
    setForWhat(event.target.value);
  };

  const cancelBtn = () => {
    setSpender("Hamid");
    setMoney("");
    setDate("");
    setForWhat("");
  };

  useEffect(() => {
    const finalPeople = forWhos.filter((people) => people.checked);
    setPeople(finalPeople.map((people) => people.name));
  }, [forWhos]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const FinalResult = {
      id: dataLength + 1,
      spender: spender,
      money: money,
      date: date,
      forWhat: forWhat,
      people: people,
    };

    props.sendResult(FinalResult);

    setSpender("Hamid");
    setMoney("");
    setDate("");
    setForWhat("");
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <div className="selecting-part">
          <div className="inputs-selector">
            <div className="spender-selector">
              <label htmlFor="spender">Spender Name:</label>
              <select
                id="spender"
                onChange={spenderHandler}
                defaultValue={spender}
              >
                <option value="Hamid">Hamid</option>
                <option value="Gholamreza">Gholamreza</option>
                <option value="Benyamin">Benyamin</option>
                <option value="Hadi">Hadi</option>
              </select>
            </div>

            <div className="money-input">
              <label htmlFor="money">Amount of Money:</label>
              <input
                id="money"
                type="number"
                value={money}
                onChange={moneyHandler}
              />
            </div>

            <div className="date-input">
              <label htmlFor="date-picker">Date:</label>
              <input
                id="date-picker"
                type="date"
                value={date}
                onChange={dateHandler}
              />
            </div>

            <div className="for-input">
              <label htmlFor="for-what">For What:</label>
              <input
                id="for-what"
                type="text"
                value={forWhat}
                onChange={forWhatHandler}
              />
            </div>
          </div>

          <div className="checkbox-selector">
            <h3>For Who:</h3>
            <ul>
              {forWhos.map((forWho) => (
                <li key={forWho.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={forWho.checked}
                      onChange={() => checkedHandler(forWho)}
                    />
                    {forWho.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button className=" submit-btn btn" type="submit">
                Submit
              </button>
              <button
                type="button"
                onClick={cancelBtn}
                className="cancel-btn btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
