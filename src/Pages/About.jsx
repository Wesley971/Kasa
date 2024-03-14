import collapsJson from "../data/collaps.json";
import Collaps from "../components/Collaps";
import { AboutPage } from "../components/Banner";

const About = () => {
    return (
        <div className="about">
            <AboutPage />
            {collapsJson.map((collaps, index) => (
                <Collaps key={index} title={collaps.title} ><p>{collaps.text}</p>
                </Collaps>
            ))}
            
        </div>
    );
};

export default About;

