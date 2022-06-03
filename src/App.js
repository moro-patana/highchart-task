import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import OfferAvailable from "./components/OfferAvailable";
import IndustributedIncome from "./components/IndustributedIncome";
import Chart from "./components/Chart";
import SpendingYears from "./components/SpendingYears";
import UndistributedIcomeChart from "./components/UndistributedIcomeChart";
const initialSaving = 17.1;
const interestRate = 0.02;
const monthlyContribution = 182;

function App() {
  const [displayedYears, setDisplayedYears] = useState(10);

  const yearsAhead = [...Array(displayedYears).keys()].map((number) => number);

  const savingsForYearsAhead = yearsAhead.reduce((acc, currVal) => {
    let princ = initialSaving; // start deposit
    const add = monthlyContribution; // monthly deposit (need plus it every year)
    const rate = interestRate; // interest rate divided to create decimal
    const months = currVal * 12; //10 years of monthly contributions
    for (let i = 1; i <= months; i++) {
      princ += add;
      princ += princ * (rate / 12);
    }
    acc[currVal] = princ;
    return acc;
  }, {});

  const currentYear = new Date().getFullYear();

  const xAxisCategories = yearsAhead.map((year) => year + currentYear);

  const seriesData = Object.values(savingsForYearsAhead);

  const totalSavings = [...seriesData].pop().toFixed(2).toLocaleString("en-US");
  const handleClick = (year) => {
    setDisplayedYears(year);
  };

  return (
    <div className="container">
      <Header />
      <div className="chart-container">
      <div className="undistributed-icome-chart-container">
          <UndistributedIcomeChart xAxisCategories={xAxisCategories} />
          <IndustributedIncome />
        </div>
        <div className="spending-years-chart-container">
          <Chart xAxisCategories={xAxisCategories} seriesData={seriesData} />
          <SpendingYears
            handleClick={handleClick}
            displayedYears={displayedYears}
          />
          <OfferAvailable
            totalSavings={totalSavings}
            savingYears={displayedYears}
            label={`${displayedYears > 1 ? "years" : "year"}`}
            interestRate={interestRate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
