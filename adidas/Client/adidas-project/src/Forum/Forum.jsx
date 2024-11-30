import React from "react";
import "./Forum.css";
import image1 from "../assets/ZA.avif";
const Forum = () => {
  const shoes = [
    {
      id: 1,
      name: "Adidas",
      image: image1,
      price: "$100.000",
    },
  ];
  return (
    <div className="forum">
      <h2>Zapatillas</h2>
      <div className="shoe-list">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
          </div>
        ))}
        ,
      </div>
    </div>
  );
};

export default Forum;
