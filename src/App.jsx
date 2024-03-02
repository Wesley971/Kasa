import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Accueil from "./Pages/Home"; // Assurez-vous d'avoir un composant pour Accueil
import APropos from "./Pages/About"; // Assurez-vous d'avoir un composant pour À propos
import Location from "./components/Location";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="location/:id" element={<Location />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
