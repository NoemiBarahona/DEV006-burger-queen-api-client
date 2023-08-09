// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'tailwindcss/tailwind.css';
import table from '../../assets/table.png';

function OrderTables(label, selected, onClick) {

    return (
        <div className={`flex justify-center items-center m-auto ${selected ? 'border-2 border-blue-500' : ''}`}>
            <div className={`text-White w-38 h-38 flex flex-col items-center justify-center ${selected ? 'text-blue-500' : ''}`} onClick={onClick}>
                <img src={table} alt="table" className="w-full h-full" />
                {label}
            </div>
        </div>
    );
}

export default OrderTables;
