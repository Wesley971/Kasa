import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Accueil from "./Pages/Home"; // Assurez-vous d'avoir un composant pour Accueil
import APropos from "./Pages/About"; // Assurez-vous d'avoir un composant pour À propos
import Location from "./Location";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a" element={<APropos />} />
        <Route path="location/:id" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
