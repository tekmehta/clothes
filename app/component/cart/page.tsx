import ClothList from "@/app/navPAge/item-Container";
import Navbar from "@/app/navPAge/navbar";
import React from "react";
const Cart = () => {
    return (
        <div>
            <Navbar/><center>

            <h1 className="pt-12 mt-3 bg-blue-300 text-stone-50 font-bold">Your Cart Item List </h1>
            </center>
            <ClothList/>
        </div>
    )
}

export default Cart;