import React from "react";
import { DrinksCard } from "../components/DrinksCard";
import { v4 } from "uuid";
export const Drinks = ({ addItemToCart }) => {
  const drinks = [
    { id: v4(),
      name: "Water 1l",
      price: 5,
    },
    { id: v4(),
      name: "Wine 750ml",
      price:  15,
    },
    { id: v4(),
      name: "Ouzo 500ml",
      price: 7,
    },
    { id: v4(),
      name: "Coffee",
      price: 3,
    },
  ];

  return (
    <>
      {drinks.map((item,index) => (       
        <DrinksCard key={index} addItemToCart={addItemToCart} drink={item}/>
      ))}
    </>
  );
};
