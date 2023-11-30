import React from "react";
import "../styles/ExCard.css";

const ExCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="excard-container">
      <div className="excard-image-wrapper">
        <img src={imageUrl} alt={title} className="excard-image" />
      </div>
      <div className="excard-info">
        <h2 className="excard-title">{title}</h2>
        <p className="excard-description">{description}</p>
        <div className="excard-price">{price}</div>
      </div>
    </div>
  );
};

export default ExCard;
