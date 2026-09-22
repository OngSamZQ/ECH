import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToLocation from "./components/ScrollToLocation";

export const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <ScrollToLocation />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;