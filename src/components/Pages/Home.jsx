import Thump from "../Thump";
import location from "../../data/logements.json";
import BannerHome from "../BannerIMG";
const Home = () => {
    return (
        <div className="home">
            <BannerHome />
            <div>
                <div className="gallery">
                    <Thump location={location} />
                </div>
            </div>
        </div>
    );
};

export default Home;