import "./Card.scss";

import { ReactElement } from "react";

import Clock from "../../assets/images/icon-clock.svg";
import Ethereum from "../../assets/images/icon-ethereum.svg";

interface Props {
  id: string;
  img: any;
  title: string;
  description: string;
  price: number;
  time: string;
  author: {
    name: string;
    link: string;
    avatar: any;
  };
}

export default function Card(card: Props): ReactElement {
  const imgStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "8px",
  };

  return (
    <div className="card">
      <div className="card__img">
        <img style={imgStyle} src={card.img} alt={`img-${card.title}`} />
      </div>

      <div className="card__title">
        <p>{card.title}</p>
      </div>

      <div className="card__description">
        <p>
          <span>{card.description}</span>
        </p>
      </div>

      <div className="card__details">
        <div className="card__details-price">
          <img
            className="card__details-price-logo"
            src={Ethereum}
            alt="ethereum"
          />
          {card.price} ETH
        </div>
        <div className="card__details-time">
          <img className="card__details-time-logo" src={Clock} alt="clock" />
          <p>
            <span>{card.time}</span>
          </p>
        </div>
      </div>

      <div className="card__footer">
        <div className="card__footer-author">
          <img
            className="card__footer-author-avatar"
            src={card.author.avatar}
            alt={`img-${card.author.avatar.title}`}
          />
          <div className="card__footer-author-name">
            <div className="card__footer-author-name-text">
              <p>
                <span>Creation of</span>
              </p>
            </div>
            <div className="card__footer-author-name-author">
              <a href={card.author.link} target="_blank" rel="noreferrer">
                {card.author.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
