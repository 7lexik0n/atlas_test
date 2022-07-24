import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../redux/countersSlice";
import { RootState } from "../../redux/store";
import Counter from "../ui/Counter";
import Input from "../ui/Input";
import { variants } from "../ui/Input/types";
import { alwaysFalse, alwaysTrue, isNotEmpty } from "../ui/Input/validations";

const COUNTER_STEP = 1;

const validations = [isNotEmpty, alwaysFalse];

const Inputs = () => {
  const [variant, setVariant] = useState<variants>("primary");
  const { activeTab } = useSelector((state: RootState) => state.components);
  const counters = useSelector((state: RootState) => state.counters);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [valueValidatedFail, setValueValidatedFail] = useState("");
  const [valueValidatedSuccess, setValueValidatedSuccess] = useState("");
  const [valueDisabled, setValueDisabled] = useState("");

  useEffect(() => {
    setVariant(activeTab === "3" ? "secondary" : "primary");
  }, [activeTab]);

  return (
    <div className="App__inputs">
      <Input
        variant={variant}
        placeholder="Текст"
        value={value}
        onChange={setValue}
        label="Custom"
      />

      <p className="App__title">Всегда невалидный инпут</p>
      <Input
        variant={variant}
        placeholder="Текст"
        value={valueValidatedFail}
        onChange={setValueValidatedFail}
        validations={validations}
        errorMessage="Ошибка: Подпись к полю"
        successMessage="Успех: Подпись к полю"
      />

      <p className="App__title">Всегда валидный инпут</p>
      <Input
        variant={variant}
        placeholder="Текст"
        value={valueValidatedSuccess}
        onChange={setValueValidatedSuccess}
        validations={[alwaysTrue]}
        errorMessage="Ошибка: Подпись к полю"
        successMessage="Успех: Подпись к полю"
      />

      <Input
        variant={variant}
        placeholder="Текст"
        value={valueDisabled}
        onChange={setValueDisabled}
        disabled
      />

      {Object.entries(counters).map(([id, { value, label }]) => {
        const payload = { id, step: COUNTER_STEP };

        return (
          <Counter
            key={id}
            label={label}
            value={value}
            onIncrease={() => dispatch(increaseCounter(payload))}
            onDecrease={() => dispatch(decreaseCounter(payload))}
          />
        );
      })}
    </div>
  );
};

export default Inputs;
