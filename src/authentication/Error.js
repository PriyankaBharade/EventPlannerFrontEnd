import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className="main-container">
      {/* <Card> */}
        {/* <header className={"header"}> */}
        <h2>{props.title}</h2>
        {/* </header> */}
        {/* <div className={"content"}> */}
        <p>{props.message}</p>
        {/* </div>
        <footer className={"actions"}> */}
        <button onClick={props.errorHandler}>Okay</button>
        {/* <Button onClick={props.errorHandler}>Okay</Button> */}
        {/* </footer> */}
      {/* </Card> */}
    </div>
  );
};

export default Error;
