import { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/images/arrow.svg";
import "../sass/components/collaps.scss";

const Collaps = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsContent">
      <h2 onClick={toggleSection} className={`headCollaps ${isOpen ? 'open' : ''}`}>
        {title}
        <img 
          src={arrow} 
          alt="arrow" 
          className={`arrow ${isOpen ? 'open' : ''}`} 
        />
      </h2>
      <div className={`headCollapsContent ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

Collaps.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string // Ne pas marquer comme obligatoire
};

export default Collaps;
