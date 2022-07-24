import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.sass";
import { InputProps } from "./types";
import { ReactComponent as Cross } from "./cross.svg";
import { ReactComponent as CheckMark } from "./mark.svg";

const Input = ({
  placeholder = "",
  variant = "primary",
  label = "Label",
  disabled = false,
  value,
  onChange,
  validations,
  errorMessage,
  successMessage,
  styles,
}: InputProps) => {
  const [typed, setTyped] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = useCallback(
    (value: string, force?: boolean) => {
      if (validations) {
        const isValid = validations.every((validationFunction) =>
          validationFunction(value)
        );

        (typed || force) && setError(!isValid);
        (typed || force) && setSuccess(isValid);
      }
    },
    [typed, validations]
  );

  useEffect(() => {
    const inputEl = inputRef.current;
    const onBlurHandler = () => {
      setTyped(true);
      validate(value, true);
    };

    inputEl?.addEventListener("blur", onBlurHandler);

    return () => inputEl?.removeEventListener("blur", onBlurHandler);
  }, [validate, value, inputRef]);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    validate(newValue);
    onChange(newValue);
  };

  const resetValue = useCallback(() => {
    onChange("");
    validate("");
    inputRef?.current?.focus();
  }, [onChange, validate]);

  const focusOnInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const InputIcon = useCallback(() => {
    if (typed && (value.trim() !== "" || error || success)) {
      return success ? (
        <div
          className="input__icon"
          onClick={() => {
            return false;
          }}
        >
          <CheckMark />
        </div>
      ) : (
        <div className="input__icon" onClick={resetValue}>
          <Cross />
        </div>
      );
    }

    return null;
  }, [typed, value, resetValue, error, success]);

  return (
    <div className="input__wrapper">
      <div
        className={`input__container input__container_${variant} ${
          disabled ? `input__container_disabled` : ``
        } ${error ? `input__container_error` : ``} ${
          success ? `input__container_success` : ``
        }`}
        style={{ ...styles }}
      >
        <input
          ref={inputRef}
          className={`input input__${variant}`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={inputHandler}
        />
        <InputIcon />
        {variant === "secondary" && (
          <div className="input__label" onClick={focusOnInput}>
            {label}
          </div>
        )}
      </div>
      {error && errorMessage && (
        <div className="input__sign input__sign_error">{errorMessage}</div>
      )}
      {success && successMessage && (
        <div className="input__sign input__sign_success">{successMessage}</div>
      )}
    </div>
  );
};

export default Input;
