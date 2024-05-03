import React from "react";
// import PropTypes from "prop-types";

export default function About(props) {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor:
            props.mode === "dark"
              ? "#212529"
              : props.mode === "light"
              ? "white"
              : props.mode === "blue"
              ? "#240952"
              : props.mode === "green"
              ? "#0c2418"
              : "white",
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "light"
              ? "black"
              : props.mode === "blue"
              ? "white"
              : props.mode === "green"
              ? "white"
              : "black",
        }}
      >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#212529"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#2b0071"
                      : props.mode === "green"
                      ? "#0c2418"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#252525"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#014779"
                      : props.mode === "green"
                      ? "#0D2818"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#212529"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#2b0071"
                      : props.mode === "green"
                      ? "#0c2418"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#252525"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#014779"
                      : props.mode === "green"
                      ? "#0D2818"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#212529"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#2b0071"
                      : props.mode === "green"
                      ? "#0c2418"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark"
                      ? "#252525"
                      : props.mode === "light"
                      ? "white"
                      : props.mode === "blue"
                      ? "#014779"
                      : props.mode === "green"
                      ? "#0D2818"
                      : "white",
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "light"
                      ? "black"
                      : props.mode === "blue"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button type="button" onClick={toggelStyle} className="btn btn-primary ">{btnText}</button>
    </div> */}
    </div>
  );
}
