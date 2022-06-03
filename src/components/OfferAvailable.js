import bankLogo from '../assets/bank-logo.png';
const cupPrice = 49.49
const OfferAvailable = ({totalSavings, savingYears, interestRate}) => {
    const cups = Math.round(totalSavings / cupPrice)
    return(
        <div className="offer-available-container">
            <div className="offer-available-content">
              <div className="offer-available-content-item">
                  <p className="offer-available-content-description">Based on the up-to-date information by Finansportalen's best offer available: </p>
                  <div className="bank-details">
                      <img src={bankLogo} alt=""/>
                      <div>
                          <p className="bank-name">
                          TF Bank Norge NUF (<span>interest rate at</span> <b>{interestRate * 100}%</b>)
                          </p>
                      </div>
                  </div>
              </div>
              <div className="offer-available-content-item">
                  <p className="offer-available-content-description">Total expected savings in <b>{savingYears}</b>: </p>
                  <div className="total-expected">
                      <div className='total-expected-amount-container'>
                          <p className="total-expected-amount">
                          {totalSavings} kr (<span>or {cups} cups of coffee :)</span>)
                          </p>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
export default OfferAvailable;