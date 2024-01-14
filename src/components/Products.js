import React, { useEffect, useState } from "react";

// import itemData from "./itemData";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const response = await fetch("https://fakestoreapi.com/products");
    const itemList = await response.json();

    setData(itemList);
    console.log(itemList);
  }

  return (
    <div className="cardContainer">
      {data.map((item) => (
        <div className="itemCard" key={item.id}>
          <div className="category">{item.category}</div>
          <img className="img" src={item.image} alt={item.title} />
          <span>₹{item.price}</span>

          <div className="title" >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
