import { useParams } from "react-router-dom";
import locations from "../data/logements.json";
import Tags from "./Tags";
import Collaps from "./Collaps";
import Rating from "./Rating";
import Carousel from "./Carousel";

const findLocationByID = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findLocationByID(id);

  // Rediriger vers une page d'erreur si aucun emplacement n'est trouvé
  if (!location) {
    window.location.href = "/error"; // Redirection vers "/error"
    return null;
  }

  return (
    <div className="locationPage">
      <Carousel slides={location.pictures} />
      <div className="locationAllInfo">
        <div className="locationMainInfo">
          <div className="locationTitlePlace">
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
            <div className="containerTags">
              {location.tags.map((tag, index) => (
                <Tags key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="hostRating">
            <div className="host">
              <h3>{location.host.name}</h3>
              <img src={location.host.picture} alt={location.title} />
            </div>
            <div className="rating">
              <Rating rating={parseInt(location.rating, 10)} />
            </div>
          </div>
        </div>
        <div className="locationSideInfo">
          <Collaps title="Description">
            <p>{location.description}</p>
          </Collaps>
          <Collaps title="Equipement">
            <ul>
              {location.equipments.map((equip, index) => (
                <li key={++index}>{equip}</li>
              ))}
            </ul>
          </Collaps>
        </div>
      </div>
    </div>
  );
};

export default Location;
