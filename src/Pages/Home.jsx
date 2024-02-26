
import BannerHome from "../components/BannerIMG";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
const Home = () => {
    return (
        <div className="home">
            <BannerHome />
            <div>
                <Gallery />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
};

export default Home;