import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./Context/theme-context";
import { CardsPage } from "./Pages/CardsPage/CardsPage";
import { Offer } from "./Pages/OfferPage/Offer";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
