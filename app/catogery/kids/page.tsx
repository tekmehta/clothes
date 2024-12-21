
import ClothList from "@/app/navPAge/item-Container";
import Navbar from "@/app/navPAge/navbar";
import React from "react";

const Kids = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-12">
                <ClothList/>
            </div>
        </div>
    )
}

export default Kids;