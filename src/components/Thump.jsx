import PropTypes from "prop-types"; // Importation de la bibliothèque PropTypes pour la validation des types de données des props.
import { Link } from "react-router-dom"; // Importation du composant Link depuis la bibliothèque react-router-dom pour créer des liens dans l'application.

const Thump = ({ location }) => { // Définition du composant fonctionnel Thump qui prend une prop "location".
    return (
        location.map((location) => ( // Utilisation de la méthode map() pour parcourir chaque élément du tableau "location".
        <Link to={`/location/${location.id}`} className="thump" key={location.id}> {/* Création d'un lien vers une page d'emplacement spécifique avec une classe "thump" et une clé unique basée sur l'ID de l'emplacement.*/}
            <img src={location.cover} alt={location.title}/> {/* Affichage de l'image de couverture de l'emplacement avec un texte alternatif basé sur le titre de l'emplacement.*/}
            <h3>{location.title}</h3> {/* Affichage du titre de l'emplacement.*/}
        </Link>)
    ))
};

Thump.propTypes = { // Définition des types de données attendus pour les props du composant Thump.
    location: PropTypes.array.isRequired // La prop "location" doit être un tableau et est obligatoire.
};

export default Thump; // Exportation du composant Thump par défaut pour être utilisé dans d'autres parties de l'application.
