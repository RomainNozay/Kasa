import React from "react";
import PropTypes from "prop-types";

import Redstar from "../asset/img/Etoile.png";
import Greystar from "../asset/img/EtoileVide.png";

function Rating({ rating }) {
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((star) =>
        rating >= star ? (
          <img key={star.toString()} className="rating_icon" src={Redstar} alt="Etoile orangé représentant une note positive sur 5 étoiles" />
        ) : (
          <img key={star.toString()} className="rating_icon" src={Greystar} alt="Etoile grisée représentant une point négatif sur 5 étoiles" />
        )
      )}
    </div>
  );
};
Rating.propTypes = {
  rating: PropTypes.string,
}

export default Rating;