import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Carrito from "./components/Cart"
import Pizza from "./components/Pizza"

function App() {

  const [activeComponent, setActiveComponent] = useState("home");
  const loadComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "carrito":
        return <Carrito />;
        case "pizza":
          return <Pizza />
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {/* <Home /> */}
      <main>{loadComponent()}</main>
      <Footer />
    </div>
  );
}

export default App;
