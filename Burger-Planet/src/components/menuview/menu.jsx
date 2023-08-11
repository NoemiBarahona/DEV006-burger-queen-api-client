// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logocara from "../logopequeño.jsx";
import NameInput from "./inputName.jsx";
import ButtonMenu from "./buttonFoods.jsx"; // Asegúrate de importar el componente Button desde su ubicación correcta

function Menu() {
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleButtonClick = (menu) => {
    if (currentMenu === menu) {
      setCurrentMenu(null);
    } else {
      setCurrentMenu(menu);
    }
  };

  return (
    <>
      <div className="min-w-full bg-DarkBlue">
        <div className="mb-10">
          <Logocara />
        </div>
        <div>
          <NameInput />
          <ButtonMenu
            label="Desayunos"
            onClick={() => handleButtonClick("menu1")}
          />
          <ButtonMenu
            label="Almuerzos"
            onClick={() => handleButtonClick("menu2")}
          />

          {currentMenu === "menu1" && (
            <div className="text-left text-White bg-DarkBlue border-4 bg-opacity-1 border-GreenLight rounded-3xl">
              {/* Contenido del Menú 1 */}
              Menú 1
            </div>
          )}

          {currentMenu === "menu2" && (
            <div className="bg-gray-200 p-4">
              {/* Contenido del Menú 2 */}
              Menú 2
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
