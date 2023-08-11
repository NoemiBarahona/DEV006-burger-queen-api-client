// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ButtonMenu = ({ label, onClick }) => {
  return (
    <button
      className="text-3xl bg-GreenLight border-4 text-Black rounded-3xl shadow-lg w-2/5 h-20 stroke-15 stroke-GreenLight blur-12.5"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonMenu;
