import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Modifiers from "./pages/Modifiers";
import Allergens from "./pages/Allergens";
import CreateAllergen from "./pages/CreateAllergen";
import CreateModifier from "./pages/CreateModifier";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/modifiers" element={<Modifiers />} />
        <Route path="/allergens" element={<Allergens />} />
        <Route path="/create-allergen" element={<CreateAllergen />} />
        <Route path="/create-modifier" element={<CreateModifier />} />
      </Routes>
    </Router>
  );
}

export default App;
