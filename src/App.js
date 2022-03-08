import { Route, Routes } from "react-router-dom";
import Attraction from "./modules/auth/pages/Attraction";
import CarRental from "./modules/auth/pages/CarRental";
import Home from "./modules/auth/pages/home/Home";
import Hotel from "./modules/auth/pages/Hotel";
import QueryResult from "./modules/auth/pages/QueryResult";
import Resturant from "./modules/auth/pages/Resturant";
// import Weather from "./modules/auth/pages/Weather";
import Layout from "./modules/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/cars" element={<CarRental />} />
        <Route path="/restaurants" element={<Resturant />} />
        <Route path="/attractions" element={<Attraction />} />
        <Route path="/search-result" element={<QueryResult />} />
      </Route>
    </Routes>
  );
}

export default App;
