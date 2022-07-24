import React, { useMemo, useCallback } from "react";
import "./index.sass";
import { ReactComponent as ThrobberLogo } from "./throbber.svg";
import { ReactComponent as Filter } from "./filter.svg";
import { formatSeconds } from "../../../utils";
import { ButtonProps } from "./types";

const Throbbler = () => (
  <div className="button__hrobbler">
    <ThrobberLogo />
  </div>
);

const FilterIcon = ({ filters }: { filters: number }) => (
  <div className="button__filter">
    {filters === 0 ? (
      <Filter />
    ) : (
      <span className="button__filters">{filters}</span>
    )}
  </div>
);

const Button = ({
  children,
  subtitle,
  variant = "primary",
  disabled = false,
  throbber = false,
  filter = false,
  filters = 0,
  progress = false,
  value = 0,
  total,
  clickHandler,
  styles,
}: ButtonProps) => {
  const classList = useMemo(
    () => `button button_${variant} ${disabled ? `button_disabled` : ``}`,
    [variant, disabled]
  );

  const onClickHanlder = useCallback(
    () =>
      disabled || throbber || !clickHandler
        ? () => {
            return false;
          }
        : () => clickHandler(),
    [disabled, throbber, clickHandler]
  );

  const progressElement = useMemo(
    () =>
      progress && !disabled && (value || value === 0) && total ? (
        <div
          className="button__progressLine"
          style={{ width: `${(100 * value) / total}%` }}
        ></div>
      ) : null,
    [progress, disabled, value, total]
  );

  const progressSubtitle = useMemo(
    () =>
      progress && (value || value === 0) ? (
        <span className="button__subtitle">{formatSeconds(value)}</span>
      ) : null,
    [progress, value]
  );

  return (
    <div className={classList} style={{ ...styles }} onClick={onClickHanlder}>
      {throbber ? (
        <Throbbler />
      ) : (
        <>
          {progressElement}
          <div className="button__label">
            {filter && <FilterIcon filters={filters} />}
            {children}
          </div>
          {subtitle && <span className="button__subtitle">{subtitle}</span>}
          {progressSubtitle}
        </>
      )}
    </div>
  );
};

export default Button;
