import { useParams } from "react-router-dom";
import locations from "../data/logements.json";

const findLocationID = (id) => {
  return locations.find((location) => location.id === id);
};
const Location = () => {
  const { id } = useParams();
  const location = findLocationID(id);
  const picture = location.pictures;
  return (
    <div>
        <div className="pictures">
        {picture.map((picture, index) => {
          return (
            <img src={picture} alt={picture.title} key={(picture, index)} />
          );
        })}
      </div>
      <p>Voici le livre id :{id}</p>
      <p>Voici le titre du livre {location.title} </p>
      
    </div>
  );
};

export default Location;
