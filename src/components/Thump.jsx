import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Thump = ({ location }) => {
    return (
        location.map((location) => (
        <Link to={`/location/${location.id}`} className="thump" key={location.id}>
            <img src={location.cover} alt={location.title}/>
            <h3>{location.title}</h3>
        </Link>)
    ))
};

Thump.propTypes = {
    location: PropTypes.array.isRequired
};

export default Thump;
