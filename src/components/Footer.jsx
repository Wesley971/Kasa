import img from "../assets/images/LogoFooter.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={img} alt="Logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
};

export default Footer;