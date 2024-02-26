import img from "../assets/images/img-apropos.png";

const BannerAbout = () => {
  return (
    <div>
      <div className="banner">
        <img src={img} alt="Image a propos" />
        <h1> Sa fonctionne</h1>
        
      </div>
    </div>
  );
};

export default BannerAbout;
