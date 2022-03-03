import { useState } from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const [addItems, setAddItems] = useState(false);
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Nav
        count={count}
        onCountChange={setCount}
        cart={cart}
        onCartChange={setCart}
        addItems={addItems}
        onSetAddItems={setAddItems}
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
