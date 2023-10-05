import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import ProductItem from "./ProductItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}
