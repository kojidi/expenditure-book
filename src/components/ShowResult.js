import React from "react";
import "./ShowResult.css";

const ShowResult = (props) => {
  //   const [clicked, setClicked] = useState(false);

  const dropDownHandler = (id) => {
    const card = document.getElementById(`card-open-${id}`);
    const dropDown = document.getElementById(`dropdown-${id}`);
    card.classList.toggle("active");
    dropDown.classList.toggle("clicked");
  };

  //   event.target.classList.toggle("clicked");
  // };

  return (
    // <div className="result-container">
    //   {props.data.map((d) => (
    //     <React.Fragment>
    //       <div className="cards-container">
    //         <div className="result-close-card" key={d.id}>
    //           <div>{d.date}</div>
    //           <div>{d.spender}</div>
    //           <div>{d.money}</div>
    //           <div>
    //             <i
    //               onClick={dropDownHandler}
    //               className="fas fa-caret-down drop-down-btn"
    //             ></i>
    //           </div>
    //         </div>
    //         <div key={d.id} className="all-result-card">
    //           <p>
    //             <strong>Date: </strong> {d.date}
    //           </p>
    //           <p>
    //             <strong>Spender: </strong> {d.spender}
    //           </p>
    //           <p>
    //             <strong>Money: </strong> {d.money}
    //           </p>
    //           <p>
    //             <strong>For What: </strong> {d.forWhat}
    //           </p>
    //           <p>
    //             <strong>For Who: </strong> {d.people.map((p) => p)}
    //           </p>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   ))}
    // </div>
    <div className="card-container">
      {props.data.map((d) => (
        <div key={d.id} className="card">
          <div className="card-close">
            <div className="row">{d.id}</div>
            <hr />

            <div className="date">{d.date}</div>
            <hr />
            <div className="name">{d.spender}</div>
            <hr />
            <div className="amount">{d.money} T</div>
            <hr />
            <div className="dropdown-container">
              <i
                className="fas fa-caret-down dropdown"
                onClick={() => dropDownHandler(d.id)}
                id={"dropdown-" + d.id}
              ></i>
            </div>
          </div>
          <div className="card-open" id={"card-open-" + d.id}>
            <div className="card-open-content">
              <div>
                <strong>Date:</strong> {d.date}
              </div>
              <div>
                <strong>Name:</strong> {d.spender}
              </div>
              <div>
                <strong>Amount:</strong> {d.money} Toman
              </div>
              <div>
                <strong>For What:</strong> {d.forWhat}
              </div>
              <div>
                <strong>For:</strong> /{" "}
                <span key={d.id + 100}>{d.people.map((p) => p + " / ")}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default ShowResult;
