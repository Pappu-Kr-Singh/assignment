import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
