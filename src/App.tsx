import React from "react";
import ProductList from "./features/product/ProductList";
import Cart from "./features/cart/Cart";
import Header from "./components/Header";
import "./assets/style/main.css";
import "./assets/style/custom.css";
import "./index.css";

function App() {
	return (
		<div className="App main-container font-normal">
			<Header />
			<ProductList />
			<Cart />
		</div>
	);
}

export default App;
