/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ul>
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default ErrorPage;