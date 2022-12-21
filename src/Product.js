import "./css/product.css";

export default function Product({ productsList, addToCart }) {
  return (
    <div className="products_wrap">
      {productsList && productsList.map((items) => {
        return (
          <div className="product" key={items.id}>
            <img src={items.image.url} alt="product"/>
            <h3>{items.name}</h3>
            <p>{items.price.formatted_with_symbol}</p>
            <button onClick={()=>addToCart(items.id, 1)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
