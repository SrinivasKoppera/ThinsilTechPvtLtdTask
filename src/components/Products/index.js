import Header from "../Header";
import ProductCard from "../ProductsCard";
import CartContext from "../../context/CartContext";
import { useState } from "react";

import "./index.css";

const Products = () => {
  const [category, updateCategory] = useState("");
  const [title, updateTitle] = useState("All Products");
  return (
    <CartContext.Consumer>
      {(value) => {
        const { productsLists } = value;
        const productsList = category === "" ? productsLists : category;

        const onChangeCategory = (event) => {
          const filterProducts = productsLists.filter(
            (eachProduct) => eachProduct.category === event.target.id
          );
          updateCategory(filterProducts);
          updateTitle(event.target.value);
        };
        const getAllProducts = () => {
          updateCategory(productsLists);
          updateTitle("All Products");
        };
        return (
          <>
            <Header />
            <div className="container">
              <div className="filter-container">
                <h3 className="filters-heading">Category</h3>
                <div className="check-box-container">
                  <input
                    type="radio"
                    id="all products"
                    name="filter"
                    className="check-box"
                    value="all"
                    onChange={getAllProducts}
                  />
                  <label htmlFor="all products" className="label">
                    All Products
                  </label>
                </div>
                <div className="check-box-container">
                  <input
                    type="radio"
                    id="clothes"
                    name="filter"
                    className="check-box"
                    value="clothes"
                    onChange={onChangeCategory}
                  />
                  <label htmlFor="clothes" className="label">
                    Clothes
                  </label>
                </div>
                <div className="check-box-container">
                  <input
                    type="radio"
                    id="electronics"
                    value="electronics"
                    name="filter"
                    className="check-box"
                    onChange={onChangeCategory}
                  />
                  <label htmlFor="electronics" className="label">
                    Electronics
                  </label>
                </div>
                <div className="check-box-container">
                  <input
                    type="radio"
                    id="grocery"
                    className="check-box"
                    name="filter"
                    value="grocery"
                    onChange={onChangeCategory}
                  />
                  <label htmlFor="grocery" className="label">
                    Grocery
                  </label>
                </div>
                <div className="check-box-container">
                  <input
                    type="radio"
                    id="toys"
                    className="check-box"
                    name="filter"
                    value="toys"
                    onChange={onChangeCategory}
                  />
                  <label htmlFor="toys" className="label">
                    Toys
                  </label>
                </div>
              </div>
              <div className="products-container">
                <h1 className="products-heading">{title}</h1>
                <ul className="products-list">
                  {productsList.map((product) => (
                    <ProductCard productData={product} key={product.id} />
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Products;
