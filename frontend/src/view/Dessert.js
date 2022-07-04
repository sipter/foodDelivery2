import React from "react";
import { DessertCard } from "../components/DessertCard";
import { v4 as uuid } from "uuid";

import dessertImage1 from "../assets/Loukoumades.jpg"
import dessertImage2 from "../assets/Revani.jpg"
import dessertImage3 from "../assets/Sokolatopita.jpg"

export const Dessert = ({ addItemToCart }) => {
  const desserts = [
    {
      name: "Loukoumades",
      ingredients:
        "deep fried sweet dough to golden and crispy perfection.Served with honey syrup, cinnamon and with chopped walnuts or toasted sesame seeds.",
      price: 7,
      image: dessertImage1,
    },
    {
      name: "Revani",
      ingredients:
        "Syrup-soaked cake made with semolina, yoghurt and lemon zest. Served with or without ice cream.",
      price: 8,
      image: dessertImage2,
    },
    {
      name: "Sokolatopita",
      ingredients:
        "Syrup drenched chocolate cake, it's topped with a chocolate ganache and served with or without ice cream.",
      price: 9,
      image: dessertImage3,
    },
  ];

  return (
    <>
      {desserts.map((item,index) => (
        <DessertCard key={index} addItemToCart={addItemToCart} dessert={item} />
      ))}
    </>
  );
};
