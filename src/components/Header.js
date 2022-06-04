import alertLogo from "../assets/alert-icon.png";
import rectangle from "../assets/Rectangle.png";
import exclamation from "../assets/Vector.png";
const Header = () => {
  return (
    <div className="container-header">
      <h1 className="container-header-title">Spending trends</h1>
      <hr className="container-header-separator" />
      <div className="container-header-alert header-alert-container">
        <div className="header-alert-container-content">
          <div className="header-alert-container-icons">
            <img src={rectangle} alt="" />
            <img src={alertLogo} alt="" />
          </div>
          <p className="header-alert-container-description">
            Consider to work on sending more money to the savings account(-s).
          </p>
        </div>
      </div>
      <div className="container-header-average-month">
        <div className="container-header-average-month-content">
          <p>Average month-to-month result</p>
          <b>182.34 kr </b>
        </div>
        <div className="container-header-average-month-icon">
          <img src={exclamation} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
