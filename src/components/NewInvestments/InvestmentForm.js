import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    props.onAddInvestment(investmentData);
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");
    props.resetList();
  };

  const inputChangeHandler = (input, value) => {
    switch (input) {
      case "current-savings":
        setCurrentSavings(value);
        break;
      case "yearly-contribution":
        setYearlySavings(value);
        break;
      case "expected-return":
        setExpectedReturn(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
