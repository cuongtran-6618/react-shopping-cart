import React from "react";
import ProductList from "./features/product/ProductList";
import Cart from "./features/cart/Cart";
import "./assets/style/main.css";

function App() {
	return (
		<div className="App main-container">
			<header className="App-header"></header>
			<ProductList />
			<Cart />
		</div>
	);
}

export default App;
