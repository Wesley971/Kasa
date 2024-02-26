import img from "../assets/images/img-acceuil.png"
const BannerHome = () => {
    return (
        <div>
            <div className="banner">
                <img src={img} alt="Image accueil"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
};

export default BannerHome;