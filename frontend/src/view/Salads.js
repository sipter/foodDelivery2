import React from "react";
import { SaladsCard } from "../components/SaladsCard";
import { v4 as uuid } from "uuid";
import saladImage1 from "../assets/GreekSalad.jpg"
import saladImage2 from "../assets/BeetRoot.jpeg"
import saladImage3 from "../assets/PolitikiSalad.jpg"
import saladImage4 from "../assets/Lettuce.jpg"
export const Salads = ({ addItemToCart }) => {
  const salads = [
    {
      name: "Greek traditional salad",
      ingredients:"Tomatoes, cucumber, onions, green bell pepper, olives, feta cheese.",
      price: 12,
      image: saladImage1,
    },
    {
      name: "Patzaria(Beetroot)",
      ingredients:"Beetroots, with garlic and walnuts",
      price: 10,
      image: saladImage2,
    },
    {
      name: " Politiki",
      ingredients:"White cabbage with carrots, red bell pepper, celery, parsley and lemon juice.",
      price: 11,
      image: saladImage3,
    },
    {
      name: "Lettuce and arugula",
      ingredients:"Lettuce, arugula, tomatoes, parmesan cheese. Served with olive oil and balsamic vinegar.",
      price: 15,
      image: saladImage4,
    },
    
  ]

  return (<>
    {salads.map((item,index) => <SaladsCard key={index} addItemToCart={addItemToCart} salad={item} />)}
  </>);
};
