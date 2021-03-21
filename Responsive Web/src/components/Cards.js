import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Image9 from "../images/img-9.jpg";
import Image2 from "../images/img-2.jpg";
import Image3 from "../images/img-3.jpg";
import Image4 from "../images/img-4.jpg";
import Image5 from "../images/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src={Image9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image3}
              text="Travel around the worldwide with Us"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src={Image4}
              text="Travel around the worldwide with Us"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image5}
              text="Travel around the worldwide with Us"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={Image2}
              text="Travel through the Islands of Bali in a Private Curise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
