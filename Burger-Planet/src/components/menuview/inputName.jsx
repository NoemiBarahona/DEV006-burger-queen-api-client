// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="text-2xl text-White ml-16">
      <label className="mx-16" htmlFor="nameInput">
        Nombre del cliente:{" "}
      </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
        className="items-center  bg-DarkBlue border-4 border-GreenLight  rounded-3xl max-w-full h-20"
      />
    </div>
  );
}

export default NameInput;
