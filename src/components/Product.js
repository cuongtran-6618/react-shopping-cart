import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Product = (product) => {
	const dispatch = useDispatch();
    const [inventory, setInventory] = useState(product.inventory);
    const [errorMessage,setErrorMessage] = useState(undefined)


};


