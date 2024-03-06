import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Accueil from "./Pages/Home"; // Assurez-vous d'avoir un composant pour Accueil
import APropos from "./Pages/About"; // Assurez-vous d'avoir un composant pour À propos
import Error from "./Pages/Error";
import Footer from "./components/Footer";
import Location from "./Pages/Location";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="location/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
