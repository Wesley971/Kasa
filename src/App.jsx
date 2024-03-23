import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Importation du composant Header qui sera utilisé pour afficher l'en-tête de l'application.
import Accueil from "./Pages/Home"; // Importation du composant Accueil depuis le fichier Home.js, qui sera utilisé comme page d'accueil.
import APropos from "./Pages/About"; // Importation du composant APropos depuis le fichier About.js, qui sera utilisé comme page À propos.
import Error from "./Pages/Error"; // Importation du composant Error depuis le fichier Error.js, qui sera utilisé pour afficher les erreurs de routage.
import Footer from "./components/Footer"; // Importation du composant Footer qui sera utilisé pour afficher le pied de page de l'application.
import Location from "./Pages/Location"; // Importation du composant Location depuis le fichier Location.js, qui sera utilisé pour afficher les détails de l'emplacement.

const App = () => { // Définition du composant fonctionnel App.
  return (
    <BrowserRouter> {/* Utilisation du BrowserRouter pour gérer les routes de l'application. */}
      <div className="AppContainer"> {/* Division principale de l'application avec la classe "AppContainer". */}
        <Header /> {/* Affichage du composant Header pour afficher l'en-tête de l'application. */}
        <div className="Content"> {/* Division pour le contenu principal de l'application. */}
          <Routes> {/* Utilisation du composant Routes pour définir les routes de l'application. */}
            <Route path="/" element={<Accueil />} /> {/* Route pour l'URL racine de l'application, affichant le composant Accueil. */}
            <Route path="/about" element={<APropos />} /> {/* Route pour l'URL "/about", affichant le composant APropos. */}
            <Route path="location/:id" element={<Location />} /> {/* Route dynamique pour les détails de l'emplacement, affichant le composant Location avec un ID spécifique. */}
            <Route path="*" element={<Error />} /> {/* Route pour toutes les autres URL, affichant le composant Error en cas d'erreur de routage. */}
          </Routes>
        </div>
        <Footer /> {/* Affichage du composant Footer pour afficher le pied de page de l'application. */}
      </div>
    </BrowserRouter>
  );
};

export default App; // Exportation du composant App par défaut pour pouvoir l'utiliser dans d'autres parties de l'application.
