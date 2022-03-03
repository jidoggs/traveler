import { Route, Routes } from "react-router-dom";
import Home from "./modules/auth/pages/Home";
import Hotel from "./modules/auth/pages/Hotel";
import Weather from "./modules/auth/pages/Weather";
import Layout from "./modules/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}

export default App;
