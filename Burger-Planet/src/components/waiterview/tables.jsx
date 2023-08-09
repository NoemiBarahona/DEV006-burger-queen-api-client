// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'tailwindcss/tailwind.css';
import table from '../../assets/table.png';
// import { useLocation } from 'react-router-dom';

function OrderTables(props) {
    // eslint-disable-next-line react/prop-types
    const { label, selected } = props;
    // const history = useHistory();

    const handleTableClick = () => {
        if (selected) {
            // history.push(`/table/${label}`); // Redireccionar a la vista de mesa con el nombre de la mesa en la URL
        }
    };

    return (
        <div
            className={`flex justify-center items-center m-auto ${selected ? 'border-2 border-blue-500 cursor-pointer' : 'cursor-not-allowed'
                }`}
            onClick={handleTableClick}
        >
            <div
                className={`text-White w-38 h-38 flex flex-col items-center justify-center ${selected ? 'text-blue-500' : ''
                    }`}
            >
                <img src={table} alt="table" className="w-full h-full" />
                {label}
            </div>
        </div>
    );
}

export default OrderTables;

