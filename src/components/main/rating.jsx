import React, { useState } from "react";
import "./rate.style.scss";
import { FaStar } from "react-icons/fa";

const Rate = ({rating, setRating}) => {
  
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        function HandleClick(item) {
          setRating(item)
        }

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => HandleClick(ratingValue)}
            />            
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "grey"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <p>Рейтинг товара:{rating}</p>
    </div>
  );
};

export default Rate;
