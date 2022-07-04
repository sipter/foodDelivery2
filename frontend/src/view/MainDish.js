import React from "react";
import { DishCard } from "../components/DishCard";
import { v4 as uuid } from "uuid";
import mainDishImage1 from "../assets/Souvlakia.jpg";
import mainDishImage2 from "../assets/Pastitsio.jpg";
import mainDishImage3 from "../assets/Tsipoura.jpg";
import mainDishImage4 from "../assets/Spanakorizo.jpg";

export const MainDish = ({ addItemToCart }) => {
  const mainDish = [
    {
      name: "Souvlakia",
      ingredients:
        "Pork meat skewer served with potato fries, tzatziki, onions and pita bread.",
      price: 17,
      image: mainDishImage1,
    },
    {
      name: "Pastitsio",
      ingredients:
        "Pasta with bolognese sauce ,cheese and bechamel on top baked in the oven.",
      price: 15,
      image: mainDishImage2,
    },
    {
      name: "Tsipoura(Sea bream)",
      ingredients:
        "Tsipoura (Sea bream) baked in the oven, served with roasted veggies: potatoes, tomatoes, onions, bell peppers",
      price: 19,
      image: mainDishImage3,
    },
    {
      name: "Spanakorizo(vegan)",
      ingredients:
        "Spinach and rice with herbs: dill, parsley, oregano served with fresh lemon juice.",
      price: 12,
      image: mainDishImage4,
    },
  ];

  return (
    <>
      {mainDish.map((item, index) => (
        <DishCard key={index} addItemToCart={addItemToCart} mainDish={item} />
      ))}
    </>
  );
};
