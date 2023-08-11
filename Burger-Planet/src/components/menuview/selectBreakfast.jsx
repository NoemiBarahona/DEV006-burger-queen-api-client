// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function MenuBreakfast() {
  // Aquí puedes colocar los productos seleccionables para el Menú 1
  const products = ["Producto 1", "Producto 2"];

  return (
    <div className="text-left text-White bg-DarkBlue border-4 bg-opacity-1 border-GreenLight rounded-3xl">
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBreakfast;
