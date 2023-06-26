import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import InvestmentsList from "./components/Invetments/InvestmentsList";
import InvestmentForm from "./components/NewInvestments/InvestmentForm";
import Header from "./components/UI/Header";
import EmptyMessage from "./components/UI/EmptyMessage";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);
  };

  const resetList = () => {
    setYearlyData([]);
  };

  return (
    <div>
      <Header logo={logo} />

      <InvestmentForm
        onAddInvestment={calculateHandler}
        resetList={resetList}
      />

      {yearlyData.length && <InvestmentsList yearlyData={yearlyData} />}
      {!yearlyData.length && <EmptyMessage />}
    </div>
  );
}

export default App;
