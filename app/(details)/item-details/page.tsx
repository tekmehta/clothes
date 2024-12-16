
import Carousel from "@/app/navPAge/carousel";
import ClothList from "@/app/navPAge/item-Container";
import React from "react";

const ItemsDetails = () => {
    return(
        <>
            <Carousel/>
            <div className=" pl-[30px] pr-[30px] pb-5">
                <h2 className="flex justify-center text-3xl font-bold">Womens Fashion One Piece</h2>
                <div className="flex  justify-between pl-[0px] pr-[0px]"> {/* Rate */}
                    <span>Rating</span>
                    <span className="text-green-700 flex ">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                            <defs>
                                <clipPath id="halfClip">
                                <rect x="0" y="0" width="50%" height="100%" />
                                </clipPath>
                            </defs>
                            <path 
                                fill="green" 
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                clipPath="url(#halfClip)"
                            />
                            <path 
                                fill="none" 
                                stroke="green" 
                                strokeWidth="2"
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        {/* <span className="text-lx"> 3.5</span> */}

                    </span>
                    <p>
                        <span className="text-green-700">3.5</span>
                        <span> Rating very vood</span>
                    </p>
                </div>
                <hr/>
                <div className="font-bold pt-5 pb-5">{/* price */}
                    <span>Rs. 300 </span>
                    <span className="line-through">500</span>
                    <span> 30% OFF</span>
                </div>
                <hr/>
                <p className="pt-5 pb-5">Delivery in 3 day and <span className="font-bold">Free Delivery</span></p>
                <hr/>
                <div className="flex pt-5 pb-5">{/* size */}
                    <div className="pr-[50px]">
                        <p>Size</p>
                    </div>
                    <div>
                        <input  type="radio" value="20" id="option20" name="options" />
                        <label className="pr-[20px]" htmlFor="option20">20</label>

                        <input type="radio" value="21" id="option21" name="options" />
                        <label className="pr-[30px]" htmlFor="option21">21</label>

                        <input type="radio" value="22" id="option22" name="options" />
                        <label className="pr-[30px]" htmlFor="option22">22</label>

                        <input type="radio" value="23" id="option23" name="options" />
                        <label className="pr-[30px]" htmlFor="option23">23</label>
                    </div>
                </div>
                <div className="flex pt-5 pb-5">{/* color */}
                    <div className="pr-[45px]">
                        <p>Color</p>
                    </div>
                    <div className="pr-5 pb-5">
                        <input type="radio" value="green" id="color" name="colors" />
                        <span className="pr-[11px] text-green-300"> Light Green</span>
                        
                        <input type="radio" value="yellow" id="color" name="colors" />
                        <span className="pr-[15px] text-yellow-500"> Yellow</span>

                        <input type="radio" value="black" id="color" name="colors" />
                        <span className="pr-[15px] text-slate-900"> Black</span>

                        <input type="radio" value="red" id="color" name="colors" />
                        <span className="pr-[15px] text-red-500"> Red</span>
                    </div>
                </div>
                <hr/>
                <p className="flex justify-center text-3xl font-bold">Policy</p>
                <div className="pt-5 pb-5 flex flex-col gap-5"> {/* policy */}
                    <p>
                        <span className="font-bold">Free Delivary </span>
                        <span className="line-through">Rs. 40</span>
                        {/* <span> by {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> */}
                        <span> by {new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </p>
                    <ol className="list-decimal pl-5 flex flex-col gap-5">
                        <li>10 Day Replacement Policy</li>
                        <li>No Warranty Card</li>
                        <li>Cash On Delivery Available</li>
                        <li>You May Get CashBack Reward</li>
                    </ol>
                </div>
                {/* button for buy and add to card */}
                <div className="sticky bottom-0 right-1/2 transform -translate-x flex space-x-20">
                    <button className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300">Add To Card</button>
                    <button className="w-1/2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300">Buy Now</button>
                </div>
            </div>
            <ClothList/>
        </>
    )
}

export default ItemsDetails;
