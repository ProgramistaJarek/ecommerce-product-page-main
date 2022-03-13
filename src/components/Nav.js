import { useState, useEffect } from "react";

function Nav({
  count,
  onCountChange,
  cart,
  onCartChange,
  addItems,
  onSetAddItems,
}) {
  const [menu, setMenu] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [countSave, setCountSave] = useState(0);

  useEffect(() => {
    if (addItems) {
      if (count === 0) {
        onCartChange(count * 125);
        setCountSave(count);
      } else {
        onCartChange(count * 125 + cart);
        setCountSave(count + countSave);
      }
      onSetAddItems(false);
      onCountChange(0);
    }
  }, [
    addItems,
    cart,
    count,
    countSave,
    onCartChange,
    onCountChange,
    onSetAddItems,
  ]);

  return (
    <nav className="nav">
      {/* <ul className={menu ? "menu menu-active" : "menu"}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}
      <div className="mx-6 flex justify-between">
        <div className="nav-part">
          {menu ? (
            <img
              className="z-50 tablet:hidden"
              src="/images/icon-close.svg"
              alt="open"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            <img
              className="z-50 tablet:hidden"
              src="/images/icon-menu.svg"
              alt="open"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          )}
          <img
            className="ml-4 tablet:ml-0 tablet:mb-8"
            src="/images/logo.svg"
            alt="logo"
          />
          <ul className={menu ? "menu menu-active" : "menu"}>
            <li data-text="Collections">
              <a href=" ">Collections</a>
            </li>
            <li data-text="Men">
              <a href=" ">Men</a>
            </li>
            <li data-text="Women">
              <a href=" ">Women</a>
            </li>
            <li data-text="About">
              <a href=" ">About</a>
            </li>
            <li data-text="Contact">
              <a href=" ">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-part tablet:pb-5">
          <div className="relative">
            <img
              className={"cursor-pointer"}
              src="/images/icon-cart.svg"
              alt="cart"
              onClick={() => {
                setCartMenu(!cartMenu);
              }}
            />
            <p className={countSave ? "show-how-many-item flex" : "hidden "}>
              {countSave}
            </p>
          </div>
          <img
            className="avatar ml-4"
            src="/images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
      <hr className="hidden tablet:block border-Grayish-blue " />
      <div className={cartMenu ? "cart-card menu-active-cart" : "cart-card"}>
        <h3>Cart</h3>
        <hr className="border-Grayish-blue my-3" />
        <div className="cart">
          {cart === 0 ? (
            <p>your cart is empty</p>
          ) : (
            <>
              {" "}
              <div className="cart-info">
                <div className="flex items-center">
                  <img
                    className="img-cart"
                    src="/images/image-product-1-thumbnail.jpg"
                    alt="img"
                  />
                  <div className="ml-4 text-Dark-grayish-blue">
                    <p>Autmn Limited Edition...</p>
                    <p>
                      $125.00 x {countSave}{" "}
                      <span className="font-bold text-Black">${cart}</span>
                    </p>
                  </div>
                </div>
                <img
                  className="cursor-pointer"
                  src="/images/icon-delete.svg"
                  alt="img"
                  onClick={() => {
                    onCartChange(0);
                    setCountSave(0);
                  }}
                />
              </div>
              <button className="btn-cart" type="submit">
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
