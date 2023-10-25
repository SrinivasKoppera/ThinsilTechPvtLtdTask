import { useState } from "react";
import Header from "../Header";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./index.css";

const ProductItemDetails = () => {
  let { id } = useParams();
  id = parseInt(id);
  const [quantity, updateQuantity] = useState(1);
  const [product, updataProducts] = useState({});

  return (
    <CartContext.Consumer>
      {(value) => {
        const { productsLists, addCartItem } = value;
        const getProduct = productsLists.find((eachItem) => eachItem.id === id);
        updataProducts(getProduct);
        console.log(product);
        const { image_url, title, price, rating, brand } = product;

        const onIncrementQuantity = () => {
          updateQuantity(quantity + 1);
        };

        const onDecrementQuantity = () => {
          if (quantity > 1) {
            updateQuantity(quantity - 1);
          }
        };

        const onClickAddToCart = () => {
          addCartItem({ ...product, quantity });
        };

        return (
          <div>
            <Header />
            <div className="product-details-success-view">
              <div className="product-details-container">
                <img src={image_url} alt="product" className="product-image" />
                <div className="product">
                  <h1 className="product-name">{title}</h1>
                  <p className="price-details">Rs {price}/-</p>
                  <div className="rating-and-reviews-count">
                    <div className="rating-container">
                      <p className="rating">{rating}</p>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        alt="star"
                        className="star"
                      />
                    </div>
                  </div>
                  <div className="label-value-container">
                    <p className="label">Brand:</p>
                    <p className="value">{brand}</p>
                  </div>
                  <hr className="horizontal-line" />
                  <div className="quantity-container">
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={onDecrementQuantity}
                      data-testid="minus"
                    >
                      <BsDashSquare className="quantity-controller-icon" />
                    </button>
                    <p className="quantity">{quantity}</p>
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={onIncrementQuantity}
                      data-testid="plus"
                    >
                      <BsPlusSquare className="quantity-controller-icon" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="button add-to-cart-btn"
                    onClick={onClickAddToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default ProductItemDetails;
