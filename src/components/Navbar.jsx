const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 onClick={() => setActiveComponent("home")}>La Papaya Loca</h1>
      </div>
      <div>
        <button onClick={() => setActiveComponent("home")}>Home</button>
        <button onClick={() => setActiveComponent("login")}>Login</button>
        <button onClick={() => setActiveComponent("register")}>Register</button>
        <button onClick={() => setActiveComponent("pizza")}>Pizza</button>
        <button onClick={() => setActiveComponent("carrito")}><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  );
};

export default Navbar;
