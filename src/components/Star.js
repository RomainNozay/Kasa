import React from "react";

import redstar from "../asset/img/Etoile.png";
import greystar from "../asset/img/EtoileVide.png";

const Rating = ({ rating }) => {
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {starsArray.map((star) =>
        rating >= star ? (
          <img key={star.toString()} className="rating_icon" src={redstar} alt="Etoile orangé représentant une note positive sur 5 étoiles"/>
        ) : (
          <img key={star.toString()} className="rating_icon" src={greystar} alt= "Etoile grisée représentant une point négatif sur 5 étoiles"/>
        )
      )}
    </div>
  );
};

export default Rating;