import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";

// Main component representing the entire application
const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      {/* Router component to handle navigation */}
      <Router>
        <Navbar />

        {/* Routes component to define different pages and their corresponding components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
