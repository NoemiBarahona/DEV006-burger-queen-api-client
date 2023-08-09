// eslint-disable-next-line no-unused-vars
// import React from 'react';
import Logocara from "../logopequeño.jsx";
import NameInput from "./inputName.jsx";
function Menu() {
  return (
    <>
      <div className="min-w-full bg-DarkBlue w-auto">
        <div>
          <Logocara />
        </div>
        <div className="pt-8">
          <NameInput />
        </div>
      </div>
    </>
  );
}

export default Menu;
