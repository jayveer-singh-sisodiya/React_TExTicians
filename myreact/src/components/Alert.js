import React from "react";

export default function Alert(props) {
  return (
    <div style={{height:"70px"}}>
      {props.alert && <div>
        <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>Success</strong>: {props.alert.msg}
      
      </div>
    </div>}
    </div>
  );
}
