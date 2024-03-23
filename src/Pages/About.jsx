import collapsJson from "../data/collaps.json"; // Importation des données du fichier collaps.json qui contient des informations sur les éléments de collaps.

import Collaps from "../components/Collaps"; // Importation du composant Collaps qui sera utilisé pour afficher chaque élément de collaps.

import { AboutPage } from "../components/Banner"; // Importation du composant AboutPage depuis le fichier Banner.js, qui sera utilisé pour afficher une bannière dans la page About.

const About = () => { // Définition du composant fonctionnel About.
    return (
        <div className="about"> // Début de la division avec la classe "about", utilisée comme conteneur principal de la page About.
            <AboutPage /> // Affichage du composant AboutPage pour afficher la bannière dans la page About.

            {collapsJson.map((collaps, index) => ( // Utilisation de la méthode map() pour parcourir chaque élément du tableau collapsJson.
                <Collaps key={index} title={collaps.title} ><p>{collaps.text}</p> // Création d'un composant Collaps pour chaque élément de collapsJson, avec un titre et un texte spécifiques.
                </Collaps> // Fermeture du composant Collaps.
            ))}

        </div> // Fermeture de la division "about".
    );
};

export default About; // Exportation du composant About par défaut pour pouvoir l'utiliser dans d'autres parties de l'application.
