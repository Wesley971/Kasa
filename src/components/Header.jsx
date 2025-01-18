import logoKasa from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logoKasa} alt="Kasa Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
