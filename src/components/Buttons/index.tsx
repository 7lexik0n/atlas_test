import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../ui/Button";
import { variants } from "../ui/Button/types";

const TOTAL_PROGRESS = 300;
const START_PROGRESS = 0;

const Buttons = () => {
  const [progress, setProgress] = useState(START_PROGRESS);
  const [variant, setVariant] = useState<variants>("primary");
  const { activeTab } = useSelector((state: RootState) => state.components);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < TOTAL_PROGRESS) {
        setProgress((prevValue) => prevValue + 1);
      } else {
        clearProgressInterval();
      }
    }, 1000);

    const clearProgressInterval = () => clearInterval(progressInterval);

    return clearProgressInterval;
  }, [progress]);

  useEffect(() => {
    setVariant(activeTab === "1" ? "secondary" : "primary");
  }, [activeTab]);

  return (
    <div className="App__buttons">
      {/* standard buttons */}
      <Button variant={variant} subtitle="Подзаголовок">
        Заголовок
      </Button>

      <Button variant={variant} subtitle="Подзаголовок" throbber>
        Заголовок
      </Button>

      <Button variant={variant} subtitle="Подзаголовок" disabled>
        Заголовок
      </Button>

      {/* progress buttons */}
      <Button
        variant="progress"
        progress
        value={progress}
        total={TOTAL_PROGRESS}
      >
        Заголовок
      </Button>

      <Button
        variant="progress"
        progress
        throbber
        value={progress}
        total={TOTAL_PROGRESS}
      >
        Заголовок
      </Button>

      <Button variant="progress" progress disabled>
        Заголовок
      </Button>

      {/* round buttons */}
      <Button
        variant={variant === "primary" ? `round-primary` : `round-secondary`}
        filter
      >
        Фильтры
      </Button>

      <Button
        variant={variant === "primary" ? `round-primary` : `round-secondary`}
        filter
        throbber
      >
        Заголовок
      </Button>

      <Button
        variant={variant === "primary" ? `round-primary` : `round-secondary`}
        filter
        filters={1}
      >
        Фильтры
      </Button>

      <Button
        variant={variant === "primary" ? `round-primary` : `round-secondary`}
        filter
        disabled
      >
        Фильтры
      </Button>
    </div>
  );
};

export default Buttons;
