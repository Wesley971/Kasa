import PropTypes from "prop-types";

const Thump = ({ location }) => {
    return (
        location.map((location) => (
        <div className="thump" key={location.id}>
            <img src={location.image} alt={location.title}/>
            <h3>{location.title}</h3>
        </div>)
    ))
};

Thump.propTypes = {
    location: PropTypes.array.isRequired
};

export default Thump;
