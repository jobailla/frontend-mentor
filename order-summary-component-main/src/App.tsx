import "./App.scss";
import IlustrationHero from "./assets/images/illustration-hero.svg";
import iconMusic from "./assets/images/icon-music.svg";

function App() {
  const headerImgStyle = {
    width: "375px",
    borderRadius: "15px 15px 0px 0px",
  };
  return (
    <div className="order">
      <div className="order__card">
        <div className="order__card__header">
          <div className="order__card__header__img">
            <img style={headerImgStyle} src={IlustrationHero} alt="card_img" />
          </div>
        </div>
        <div className="order__card__content">
          <div className="order__card__content__title">
            <h1>Order Summary</h1>
          </div>
          <div className="order__card__content__description">
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="order__card__content__plan">
            <div className="order__card__content__plan__logo">
              <img src={iconMusic} alt="annual_plan_logo" />
            </div>
            <div className="order__card__content__plan__text">
              <p>Annual Plan <br/><span>$99.99/year</span></p>
              </div>
            <div className="order__card__content__plan__change-link">
              <a href="https://github.com/jobailla">Change</a>
            </div>
          </div>
          <div className="order__card__footer">
            <div className="order__card__footer__buttons">
                <button className="order__card__footer__buttons__proceed">Proceed to Payment</button>
                <button className="order__card__footer__buttons__cancel">Cancel order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
