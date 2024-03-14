import PropTypes from "prop-types";
import imgAccueil from "../assets/images/img-acceuil.png";
import imgApropos from "../assets/images/img-apropos.png";
const Banner = ({ imgSrc, altText, title }) => {
  return (
    <div className="banner">
      <img src={imgSrc} alt={altText} />
      <h1>{title}</h1>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <Banner
        imgSrc={imgAccueil}
        altText="Image accueil"
        title="Chez vous, partout et ailleurs"
      />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <Banner imgSrc={imgApropos} altText="Image à propos" title="" />
    </div>
  );
};

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
export { HomePage, AboutPage };
