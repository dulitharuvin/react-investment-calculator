import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import InvestmentsList from "./components/Invetments/InvestmentsList";
import InvestmentForm from "./components/NewInvestments/InvestmentForm";
import Header from "./components/UI/Header";
import EmptyMessage from "./components/UI/EmptyMessage";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const resetList = () => {
    setUserInput(null);
  };

  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />

      <InvestmentForm
        onAddInvestment={calculateHandler}
        resetList={resetList}
      />

      {userInput && (
        <InvestmentsList
          yearlyData={yearlyData}
          initialInvestment={userInput.currentSavings}
        />
      )}
      {!userInput && <EmptyMessage />}
    </div>
  );
}

export default App;
