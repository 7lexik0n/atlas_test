import React from "react";
import { CounterProps } from "./types";
import "./index.sass";

const Counter = ({
  label,
  value,
  onIncrease,
  onDecrease,
  styles,
}: CounterProps) => {
  return (
    <div className="counter" style={{ ...styles }}>
      {label && <span className="counter__label">{label}</span>}
      <div className="counter__container">
        <div
          className="counter__button counter__button_minus"
          onClick={onDecrease}
        >
          -
        </div>
        <div className="counter__value">{value}</div>
        <div
          className="counter__button counter__button_plus"
          onClick={onIncrease}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
