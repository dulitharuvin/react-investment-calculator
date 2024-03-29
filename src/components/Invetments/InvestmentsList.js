import React from "react";

import styles from "./InvestmentsList.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentsList = (props) => {
  const { yearlyData, initialInvestment } = props;

  const yearlyDataRows = yearlyData.map((yd) => (
    <tr key={yd.year}>
      <td>{yd.year}</td>
      <td>{formatter.format(yd.savingsEndOfYear)}</td>
      <td>{formatter.format(yd.yearlyInterest)}</td>
      <td>
        {formatter.format(
          yd.savingsEndOfYear -
            initialInvestment -
            yd.yearlyContribution * yd.year
        )}
      </td>
      <td>
        {formatter.format(initialInvestment + yd.yearlyContribution * yd.year)}
      </td>
    </tr>
  ));
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{yearlyDataRows}</tbody>
    </table>
  );
};

export default InvestmentsList;
