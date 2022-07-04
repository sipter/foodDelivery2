import React from "react";
import { StarterCard } from "../components/StarterCard";
import { v4 } from "uuid";
import starterImage1 from "../assets/FetaOlives.jpg"
import starterImage2 from "../assets/Tzatziki.jpg"
import starterImage3 from "../assets/Oyster.jpg"
import starterImage4 from "../assets/Saganaki.jpg"
export const Starter = ({ addItemToCart }) => {  

  const starters = [
    {
      id: v4(),
      name: "Feta cheese with olives",
      ingredients:
        "Feta cheese with olives. Served with olive oil and oregano.",
      price: 7,
      image: starterImage1,
    },
    {
      id: v4(),
      name: "Tzatziki",
      ingredients:
        "Yoghurt with cucumber, dill, garlic, olive oil and vinegar. Served with pita bread.",
      price: 6,
      image: starterImage2,
    },
    {
      id: v4(),
      name: "Grilled oyster mushrooms",
      ingredients:
        "Grilled oyster mushrooms served with olive oil, lemon juice, parsley and oregano.",
      price: 9,
      image: starterImage3,
    },
    {
      id: v4(),
      name: "Saganaki",
      ingredients: "Fried graviera cheese served with fresh lemon juice.",
      price: 7,
      image: starterImage4,
    },
  ];

  return (
    <>
      {starters.map((item,index) => (
        <StarterCard addItemToCart={addItemToCart} starter={item} key={index}/>
      
      ))}
    </>
  );
};
