import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Footer, Sidebar } from "./componenets/index";
import { Home, About, Menu, Error } from "./pages";
import "./App.css";
function App() {
  return (
    <Router>
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
