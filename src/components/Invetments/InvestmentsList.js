import React from "react";

import styles from "./InvestmentsList.module.css";

const InvestmentsList = (props) => {
  const { yearlyData } = props;

  const yearlyDataRaws = yearlyData.map((yd) => (
    <tr>
      <td>{yd.year}</td>
      <td>{yd.savingsEndOfYear}</td>
      <td>{yd.yearlyInterest}</td>
      <td>{}</td>
      <td>{yd.yearlyContribution}</td>
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
      <tbody>{yearlyDataRaws}</tbody>
    </table>
  );
};

export default InvestmentsList;
