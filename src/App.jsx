import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages";
import Navbar from "./components/Navbar/Navbar";
import { routes } from "./utils/routes";
function App() {
  // Map All Routes For Render
  const mapRoutes = routes.map((route) => (
    <Route key={route.id} path={route.path} element={route.component} />
  ));
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {mapRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
