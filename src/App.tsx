import "./App.css";
import { ThemeProvider } from "./Context/theme-context";
import { CardsPage } from "./Pages/CardsPage/CardsPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CardsPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
