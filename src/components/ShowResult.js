import React from "react";
import "./ShowResult.css";

const ShowResult = (props) => {
  //   const [clicked, setClicked] = useState(false);

  const dropDownHandler = (event) => {
    console.log(
      event.target.parentNode.parentNode.parentNode.lastChild.classList.toggle(
        "active"
      )
    );

    event.target.classList.toggle("clicked");
  };

  return (
    <div className="result-container">
      {props.data.map((d) => (
        <React.Fragment>
          <div className="cards-container">
            <div className="result-close-card" key={d.id}>
              <div>{d.date}</div>
              <div>{d.spender}</div>
              <div>{d.money}</div>
              <div>
                <i
                  onClick={dropDownHandler}
                  className="fas fa-caret-down drop-down-btn"
                ></i>
              </div>
            </div>
            <div key={d.id} className="all-result-card">
              <p>
                <strong>Date: </strong> {d.date}
              </p>
              <p>
                <strong>Spender: </strong> {d.spender}
              </p>
              <p>
                <strong>Money: </strong> {d.money}
              </p>
              <p>
                <strong>For What: </strong> {d.forWhat}
              </p>
              <p>
                <strong>For Who: </strong> {d.people.map((p) => p)}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShowResult;
