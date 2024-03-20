// Import du hook useParams de react-router-dom pour récupérer les paramètres de l'URL
import { useParams } from "react-router-dom";
// Import des données sur les emplacements depuis un fichier JSON
import locations from "../data/logements.json";
// Import du composant Tags pour afficher les tags
import Tags from "./Tags";
// Import du composant Collaps pour les éléments collapsibles
import Collaps from "./Collaps";
// Import du composant Rating pour l'affichage des évaluations
import Rating from "./Rating";
// Import du composant Carousel pour un carousel d'images
import Carousel from "./Carousel";

// Fonction pour trouver un emplacement par son ID
const findLocationByID = (id) => {
  // Recherche dans le tableau des emplacements celui qui a l'ID donné
  return locations.find((location) => location.id === id);
};

// Définition du composant Location
const Location = () => {
  // Récupération de l'ID depuis les paramètres de l'URL
  const { id } = useParams();
  // Récupération des données de l'emplacement par son ID
  const location = findLocationByID(id);

  // Rediriger vers une page d'erreur si aucun emplacement n'est trouvé
  if (!location) {
    // Redirection vers "/error" si aucun emplacement n'est trouvé
    window.location.href = "/error";
    // Retourne null pour ne rien afficher si aucun emplacement n'est trouvé
    return null;
  }

  // Rendu du composant
  return (
    // Conteneur principal de la page d'emplacement
    <div className="locationPage">
      {/* Carousel pour afficher les images de l'emplacement */}
      <Carousel slides={location.pictures} />

      {/* Conteneur pour toutes les informations de l'emplacement */}
      <div className="locationAllInfo">
        {/* Section pour les informations principales */}
        <div className="locationMainInfo">
          {/* Titre, lieu et tags de l'emplacement */}
          <div className="locationTitlePlace">
            {/* Titre de l'emplacement */}
            <h2>{location.title}</h2>
            {/* Lieu de l'emplacement */}
            <h3>{location.location}</h3>
            {/* Affichage des tags de l'emplacement */}
            <div className="containerTags">
              {/* Boucle pour chaque tag */}
              {location.tags.map((tag, index) => (
                // Utilisation du composant Tags avec le texte du tag
                <Tags key={index} text={tag} />
              ))}
            </div>
          </div>

          {/* Section pour l'hôte et son évaluation */}
          <div className="hostRating">
            {/* Affichage du nom de l'hôte et de sa photo */}
            <div className="host">
              <h3>{location.host.name}</h3>
              <img src={location.host.picture} alt={location.title} />
            </div>

            {/* Affichage de l'évaluation de l'emplacement */}
            <div className="rating">
              {/* Utilisation du composant Rating avec la note de l'emplacement */}
              {/* Convertit la chaîne de caractères représentant la note en un nombre entier */}
              <Rating rating={parseInt(location.rating, 10)} />
            </div>
          </div>
        </div>

        {/* Section pour les informations supplémentaires */}
        <div className="locationSideInfo">
          {/* Collapsible pour afficher la description de l'emplacement */}
          <Collaps title="Description">
            {/* Affichage de la description de l'emplacement */}
            <p>{location.description}</p>
          </Collaps>

          {/* Collapsible pour afficher les équipements de l'emplacement */}
          <Collaps title="Equipement">
            {/* Liste des équipements */}
            <ul>
              {/* Boucle pour chaque équipement */}
              {location.equipments.map((equip, index) => (
                // Affichage de chaque équipement dans un élément de liste
                <li key={++index}>{equip}</li>
              ))}
            </ul>
          </Collaps>
        </div>
      </div>
    </div>
  );
};

// Export du composant Location
export default Location;
