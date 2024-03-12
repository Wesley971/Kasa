import BannerAbout from "../components/BannerAbout";
import collapsJson from "../data/collaps.json";
import Collaps from "../components/Collaps";

const About = () => {
    return (
        <div className="about">
            <BannerAbout />
            {collapsJson.map((collaps, index) => (
                <Collaps key={index} title={collaps.title} ><p>{collaps.text}</p>
                </Collaps>
            ))}
            
        </div>
    );
};

export default About;

