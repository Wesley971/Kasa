
import { HomePage } from "../components/Banner";
import Gallery from "../components/Gallery";
const Home = () => {
    return (
        <div className="home">
            <HomePage />
            <div>
                <Gallery />
            </div>
        </div>
    );
};

export default Home;