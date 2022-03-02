function Nav({ count, cart, onCartChange, addItems }) {
  console.log(addItems);
 
  return (
    <nav className="nav">
      <ul className="menu">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="mx-6 flex justify-between">
        <div className="nav-part">
          <img src="/images/icon-menu.svg" alt="open" />
          <img className="ml-4" src="/images/logo.svg" alt="logo" />
        </div>
        <div className="nav-part">
          <img src="/images/icon-cart.svg" alt="cart" />
          <img
            className="avatar ml-4"
            src="/images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="cart-card">
        <h3>Cart</h3>
        <hr className="border-Grayish-blue my-3" />
        <div className="cart-info">
          {cart === 0 ? (
            <p>your cart is empty</p>
          ) : (
            <p>your cart is not empty</p>
          )} = {cart}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
