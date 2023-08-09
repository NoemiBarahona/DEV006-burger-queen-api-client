// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className=" flex flex-col items-center  w-4/5 text-3xl space-y-4 text-White">
      <label htmlFor="nameInput">Nombre del cliente: </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
        className="items-center bg-DarkBlue border-4 border-GreenLight rounded-3xl py-2 px-4 w-full h-20"
      />
    </div>
  );
}

export default NameInput;
