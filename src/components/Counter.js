import React, { useState } from "react";
import {Button} from "reactstrap";
const Counter = (props) => {
  const [count, setCount] = useState(1);
  if(count<1){setCount(1)};
  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };
  props.counter(count);

  return (
    <div className="d-flex border justify-content-center"style={{
      width: "9rem",
      height: "3rem",
    }}>
      <Button className="" color="warning" onClick={azalt} data-cy="decrease"
      style={{
        width: "3rem",
        height: "3rem",
      }}>
        -
      </Button>
      <p className="d-flex align-items-center justify-content-center" style={{
        width: "3rem",
        height: "3rem",
        textAlign: "center"
      }}>{count}</p>
      <Button className="" color="warning" onClick={arttir} data-cy="increase"
      style={{
        width: "3rem",
        height: "3rem",
      }}>
        +
      </Button>
    </div>
  );
};
export default Counter;
