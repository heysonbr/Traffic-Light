import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState();

  const randomColor = () => {
    setColor("Green");
    if (color === "Red") {
      setColor("Green");
    } else if (color === "Green") {
      setColor("Yellow");
    } else if (color === "Yellow") {
      setColor("Red");
    } else if (color === "Purple") {
      setColor("Green");
    }
  };
  const purpleColor = () => {
    setColor("Purple");
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center p-5 pb-0">
        <div
          className="border border-3 p-3 m-1 rounded-pill bg-black "
          style={{ width: "150px", height: "370px" }}
        >
          <button
            onClick={() => setColor("Red")}
            className="rounded-circle  m-1 bg-danger"
            style={{
              width: "100px",
              height: "100px",
              boxShadow: color === "Red" ? "0 0 40px #ffffff" : "",
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="rounded-circle m-1 bg-warning"
            style={{
              width: "100px",
              height: "100px",
              boxShadow: color === "Yellow" ? "0 0 40px #ffffff" : "",
            }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Green")}
            className="rounded-circle m-1 bg-success"
            style={{
              width: "100px",
              height: "100px",
              boxShadow: color === "Green" ? "0 0 40px #ffffff" : "",
            }}
          >
            Green
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-center p-0">
        <div
          className="border border-3 p-3 m-1 rounded-pill bg-black "
          style={{ width: "150px", height: "200" }}
        >
          <button
            onClick={() => setColor("Purple")}
            className="rounded-circle m-1 "
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "purple",
              boxShadow: color === "Purple" ? "0 0 40px #ffffff" : "",
            }}
          >
            Purple
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="d-flex justify-content-center p-3 ">
          <button
            onClick={randomColor}
            type="button"
            class="btn btn-outline-primary"
          >
            RAMDOM -purple
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={purpleColor}
            type="button"
            class="btn btn-outline-primary"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
