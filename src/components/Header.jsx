import logoKasa from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img src={logoKasa} alt="Kasa Logo" />
      <nav>
        <ul>
          <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")}>
          <li>Acceuil</li>
          </NavLink>
          <NavLink to ="about" className={({isActive}) => (isActive ? "underline" : "")}>
          <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
