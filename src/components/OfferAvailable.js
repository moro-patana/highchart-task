import bankLogo from "../assets/bank-logo.png";
const cupPrice = 49.49;
const OfferAvailable = ({ totalSavings, savingYears, interestRate, label }) => {
  const cups = Math.round(totalSavings / cupPrice);
  return (
    <div className="offer-available-container">
      <div className="offer-available-content">
        <div className="offer-available-content-item">
          <p className="offer-available-content-description">
            Based on the up-to-date information by Finansportalen's best offer
            available:{" "}
          </p>
          <div className="bank-details">
            <img src={bankLogo} alt="" />

            <div className="bank-name">
              <p>TF Bank Norge NUF</p>{" "}
              <span>
                (interest rate at <b>{interestRate * 100}%</b>)
              </span>
            </div>
          </div>
        </div>
        <div className="offer-available-content-item">
          <p className="offer-available-content-description">
            Total expected savings in{" "}
            <b>
              {savingYears} {label}
            </b>
            :{" "}
          </p>
          <div className="total-expected">
            <div className="total-expected-amount-container">
              <div className="total-expected-amount">
                <p>{totalSavings} kr</p>{" "}
                <span>or {cups} cups of coffee :)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferAvailable;
