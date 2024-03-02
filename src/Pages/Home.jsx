
import BannerHome from "../components/BannerIMG";
import Gallery from "../components/Gallery";
const Home = () => {
    return (
        <div className="home">
            <BannerHome />
            <div>
                <Gallery />
            </div>
        </div>
    );
};

export default Home;