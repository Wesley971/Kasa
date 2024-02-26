import Thump from "./Thump";
import location from "../data/logements.json";

const Gallery = () => {
  return (
    <div className="gallery">
      <Thump location={location} />
    </div>
  );
};

export default Gallery;
