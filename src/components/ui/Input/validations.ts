import { validationFunction } from "./types";

export const isNotEmpty: validationFunction = (value) => {
  return value.trim() !== "";
};

export const alwaysFalse: validationFunction = () => {
  return false;
};

export const alwaysTrue: validationFunction = () => {
  return true;
};
