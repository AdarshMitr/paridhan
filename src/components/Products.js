import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState(['']);

  async function getList() {
    const response = await fetch("https://fakestoreapi.com/products");
    const itemList = await response.json();
   
    setData(itemList);
    console.log(itemList)
  }

  useEffect(() => {
    getList();
  }, []);

  let {id, title, price, description, category, image, rating}=data ;
  return (
    <div className="cardContainer">
      <div className="itemCard">
        <div className="category">{data[0].category}</div>
        <img  className="img" src={data[0].image} alt={title}/>
        <span>₹{data[0].price}</span>
       
        <div className="title" id={2}>
        {data[0].title}
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Products;
