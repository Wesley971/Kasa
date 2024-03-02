import BannerAbout from "../components/BannerAbout";
import collapsJson from "../data/collaps.json";
import Collapsis from "../components/Collapsis";

const About = () => {
    return (
        <div className="about">
            <BannerAbout />
            {collapsJson.map((collaps, index) => (
                <Collapsis key={index} title={collaps.title} content={collaps.text}>
                </Collapsis>
            ))}
            <p>Voici la page À propos</p>
        </div>
    );
};

export default About;

