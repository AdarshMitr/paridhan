import React, { useEffect, useState } from "react";

import itemData from "./itemData";

const Products = () => {
  // const [data, setData] = useState([""]);

  // async function getList() {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const itemList = await response.json();

  //   setData(itemList);
  //   console.log(itemList);
  // }

  // useEffect(() => {
  //   getList();
  // }, []);
 

 


  return (
    <div className="cardContainer">
      {itemData.map((item) => 
        <div className="itemCard">
          <div className="category">{item.category}</div>
          <img className="img" src={item.image} alt={item.title} />
          <span>₹{item.price}</span>

          <div className="title" id={4}>
            {item.title}
          </div>
        </div>
      )}
      
    </div>
  );
};
export default Products;
