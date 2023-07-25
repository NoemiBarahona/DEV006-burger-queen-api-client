// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function SelectProfile() {
    const [selectedProfile, setSelectedProfile] = useState(''); // State para manejar la opción seleccionada

    const handleProfileChange = (event) => {
        setSelectedProfile(event.target.value); // Actualizar el estado al cambiar la selección
    };

    return (
        <select name="" id="" value={selectedProfile} onChange={handleProfileChange}>
            <option value="">Elige tu rol</option>
            <option value="chef">Jefe de cocina</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
        </select>
    );
}

export default SelectProfile;
