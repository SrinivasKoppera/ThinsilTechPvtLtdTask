import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PublicRouter from "./components/Routing/PublicRouter";
import PrivateRouter from "./components/Routing/PrivateRouter";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductItemDetails from "./components/ProductItemDetails";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import { useState } from "react";

const productsLists = [
  {
    title: "Wide Bowknot Hat",
    brand: "MAJIK",
    price: 288,
    id: 1,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
    rating: "3.6",
    category: "clothes",
  },
  {
    title: "Plain Round Neck T-shirt",
    brand: "Huetrap",
    price: 395,
    id: 2,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
    rating: "4.1",
    category: "clothes",
  },
  {
    title: "Cotton Hoodie",
    brand: "Scott International",
    price: 498,
    id: 3,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
    rating: "3.8",
    category: "clothes",
  },
  {
    title: "Men's Waistcoat",
    brand: "LEVIS",
    price: 2500,
    id: 4,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
    rating: "4.3",
    category: "clothes",
  },
  {
    title: "Slim Fit Jeans",
    brand: "LEVIS",
    price: 1469,
    id: 5,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
    rating: "3.1",
    category: "clothes",
  },
  {
    title: "Miss Chase Bodycon Dress",
    brand: "LEVIS",
    price: 974,
    id: 6,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png",
    rating: "3.8",
    category: "clothes",
  },
  {
    title: "Zari Design Kurta",
    brand: "Libas",
    price: 1869,
    id: 7,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png",
    rating: "4.4",
    category: "clothes",
  },
  {
    title: "Slim Fit Blazer",
    brand: "LEVIS",
    price: 2599,
    id: 8,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png",
    rating: "4.2",
    category: "clothes",
  },
  {
    title: "PS5 Controller Charger",
    brand: "New World",
    price: 1749,
    id: 21,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png",
    rating: "3.3",
    category: "electronics",
  },
  {
    title: "Podcast Microphone",
    brand: "MAONO",
    price: 5555,
    id: 22,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png",
    rating: "4.4",
    category: "electronics",
  },
  {
    title: "Dynamic Microphone",
    brand: "JTS Store",
    price: 1699,
    id: 23,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png",
    rating: "3.9",
    category: "electronics",
  },
  {
    title: "Front Load Machine",
    brand: "Samsung",
    price: 22490,
    id: 24,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
    rating: "4.5",
    category: "electronics",
  },
  {
    title: "Eggs",
    brand: "Naturoz",
    price: 60,
    id: 36,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
    rating: "3.6",
    category: "grocery",
  },
  {
    title: "Chilli Extract Sauce",
    brand: "Everin",
    price: 788,
    id: 37,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
    rating: "4.1",
    category: "grocery",
  },
  {
    title: "Flour Unbleached",
    brand: "TWF Store",
    price: 200,
    id: 38,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
    rating: "4.3",
    category: "grocery",
  },
  {
    title: "Fresh Produce Green Chilli",
    brand: "Amazon",
    price: 30,
    id: 39,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
    rating: "4.2",
    category: "grocery",
  },
  {
    title: "Maroon Kumkum ",
    brand: "Amazon",
    price: 200,
    id: 40,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png",
    rating: "3.9",
    category: "grocery",
  },
  {
    title: "Fresh Lemon, 100g",
    brand: "Amazon",
    price: 50,
    id: 41,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png",
    rating: "4.5",
    category: "grocery",
  },
  {
    title: "Virgin Avocado Oil",
    brand: "ProV",
    price: 4144,
    id: 42,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
    rating: "4.4",
    category: "grocery",
  },
  {
    title: "Basmati Rice",
    brand: "Fortune",
    price: 244,
    id: 43,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png",
    rating: "3.6",
    category: "grocery",
  },
  {
    title: "Non-Toxic Robot Toys",
    brand: "FunBlast",
    price: 1545,
    id: 52,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png",
    rating: "3.3",
    category: "toys",
  },
  {
    title: "Honey Teddy Bear",
    brand: "Honey",
    price: 599,
    id: 53,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png",
    rating: "4.3",
    category: "toys",
  },
  {
    title: "Nexa Yellow Car",
    brand: "Quinergys",
    price: 490,
    id: 54,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png",
    rating: "4.1",
    category: "toys",
  },
];

const App = () => {
  const [cartList, updateCartList] = useState([]);

  const removeAllCartItems = () => {
    updateCartList([]);
  };

  const incrementCartItemQuantity = (id) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === id
    );
    if (productObject) {
      updateCartList(
        cartList.map((eachCartItem) => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + 1;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        })
      );
    }
  };

  const decrementCartItemQuantity = (id) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === id
    );
    if (productObject.quantity > 1) {
      updateCartList(
        cartList.map((eachCartItem) => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        })
      );
    } else {
      removeCartItem(id);
    }
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    );

    updateCartList(updatedCartList);
  };

  const addCartItem = (product) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === product.id
    );

    if (productObject) {
      updateCartList(
        cartList.map((eachCartItem) => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity;

            return { ...eachCartItem, quantity: updatedQuantity };
          }

          return eachCartItem;
        })
      );
    } else {
      const updatedCartLists = [...cartList, product];
      updateCartList(updatedCartLists);
    }
  };

  return (
    <CartContext.Provider
      value={{
        productsLists,
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/login"
            element={<PublicRouter component={Login} />}
          />
          <Route
            exact
            path="/home"
            element={<PrivateRouter component={Home} />}
          />
          <Route
            exact
            path="/products"
            element={<PrivateRouter component={Products} />}
          />
          <Route
            exact
            path="/"
            element={<PublicRouter component={Registration} />}
          />
          <Route
            exact
            path="products/:id"
            element={<PrivateRouter component={ProductItemDetails} />}
          />
          <Route
            exact
            path="/cart"
            element={<PrivateRouter component={Cart} />}
          />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
