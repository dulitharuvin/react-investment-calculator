import React from "react";

import styles from "./InvestmentsList.module.css";

const InvestmentsList = (props) => {
  const { yearlyData, initialInvestment } = props;

  const initialInvestmentProp = +initialInvestment;

  const yearlyDataRows = yearlyData.map((yd) => (
    <tr key={yd.year}>
      <td>{yd.year}</td>
      <td>{yd.savingsEndOfYear}</td>
      <td>{yd.yearlyInterest}</td>
      <td>
        {yd.savingsEndOfYear -
          initialInvestmentProp -
          yd.yearlyContribution * yd.year}
      </td>
      <td>{initialInvestmentProp + yd.yearlyContribution * yd.year}</td>
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
