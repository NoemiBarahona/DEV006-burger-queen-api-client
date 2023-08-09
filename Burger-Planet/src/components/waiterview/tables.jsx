/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'tailwindcss/tailwind.css';
import table from '../../assets/table.png';

function OrderTable({ tableNumber, isClickable }) {
    const handleClick = () => {
        // Handle table click if needed
    };

    return (
        <div
            className={`flex justify-center items-center ${
                isClickable ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
            onClick={isClickable ? handleClick : undefined}
        >
            <div
                className={`text-White text-3xl w-38 h-38 flex flex-col items-center justify-center ${
                    isClickable ? 'text-blue-500 cursor-pointer' : ''
                }`}
            >
                <img src={table} alt="table" className="w-full h-full" />
                {`mesa ${tableNumber}`}
            </div>
        </div>
    );
}

export default OrderTable;
