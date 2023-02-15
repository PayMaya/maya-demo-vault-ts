import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import CardsPage from "./views/CardsPage";

function App() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
