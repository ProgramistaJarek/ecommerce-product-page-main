function Product({ count, onCountChange, onSetAddItems }) {
  return (
    <div className="product">
      <img
        className="product-img"
        src="/images/image-product-1.jpg"
        alt="product"
      />
      <ProductInfo
        company="Sneaker Company"
        name="Fall Limited Edition Sneakers"
        desc="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
        currPrice="$125.00"
        discount="50%"
        orgiPrice="$250.00"
        count={count}
        onCountChange={onCountChange}
        onSetAddItems={onSetAddItems}
      />
    </div>
  );
}

const ProductInfo = ({
  company,
  name,
  desc,
  currPrice,
  discount,
  orgiPrice,
  count,
  onCountChange,
  onSetAddItems,
}) => {
  return (
    <div className="product-card">
      <h2 className="company">{company}</h2>
      <p className="name">{name}</p>
      <p className="description">{desc}</p>
      <div className="price">
        <div className="flex items-center">
          <p className="curr-price">{currPrice}</p>
          <p className="discount">{discount}</p>
        </div>
        <p className="orgi-price">{orgiPrice}</p>
      </div>
      <div className="add-to-cart">
        <div className="count">
          <img
            className="cursor-pointer"
            src="/images/icon-minus.svg"
            alt="minus"
            onClick={() =>
              count <= 0
                ? alert("the number cannot be negative")
                : onCountChange(count - 1)
            }
          />
          <p>{count}</p>
          <img
            className="cursor-pointer"
            src="/images/icon-plus.svg"
            alt="plus"
            onClick={() => onCountChange(count + 1)}
          />
        </div>
        <button
          className="btn-cart tablet:mt-0"
          type="submit"
          onClick={() =>
            count === 0
              ? alert("you have to pick how many elements you want to add")
              : onSetAddItems(true)
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
