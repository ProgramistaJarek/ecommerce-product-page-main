import { useState } from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const [addItems, setAddItems] = useState(false);
  return (
    <div className="App">
      <Nav
        count={count}
        cart={cart}
        onCartChange={setCart}
        addItems={addItems}
      />
      <Product
        count={count}
        onCountChange={setCount}
        onSetAddItems={setAddItems}
      />
    </div>
  );
}

export default App;
