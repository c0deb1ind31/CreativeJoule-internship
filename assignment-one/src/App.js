import "./App.css";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/Navbar.jsx";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
