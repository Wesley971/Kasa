import PropTypes from "prop-types";
import starFull from "../assets/images/starFull.svg";
import starEmpty from "../assets/images/starEmpty.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starEmpty}
          alt={index < rating ? "Full Star" : "Empty Star"}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

// a revoir