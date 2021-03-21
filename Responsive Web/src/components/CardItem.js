import React from "react";
import { Link } from "react-router-dom";

function CardItem({ path, src, text, label }) {
  return (
    <>
      <li className="cards_item">
        <Link className="cards_item_link" to={path}>
          <figure className="cards_item_pic-wrap" data-category={label}>
            <img src={src} alt="Travel" className="cards_item_img" />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
