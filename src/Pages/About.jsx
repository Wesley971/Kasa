import BannerAbout from "../components/BannerAbout";
import collapsJson from "../data/collaps.json";
import Collapsis from "../components/Collapsis";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="about">
            <BannerAbout />
            <div>
            {collapsJson.map((collaps, index) => (
                <Collapsis key={index} title={collaps.title} content={collaps.text}>
                </Collapsis>
            ))}
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
};

export default About;

