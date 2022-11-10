import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { ThemeProvider } from "./Context/theme-context";
import { CardsPage } from "./Pages/CardsPage/CardsPage";
import { Offer } from "./Pages/OfferPage/Offer";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
