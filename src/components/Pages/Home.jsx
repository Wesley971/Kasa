import Thump from "../Thump";
import location from "../../data/logements.json";
const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src="public\Images\mer-et-foret.png" alt="Foret"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div>
                <div className="galerry">
                    <Thump location={location} />
                </div>
            </div>
        </div>
    );
};

export default Home;