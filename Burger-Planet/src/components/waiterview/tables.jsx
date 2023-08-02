// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'tailwindcss/tailwind.css';
import table from '../../assets/table.png';

function OrderTables() {
    return (
        <div className="flex justify-center items-center m-auto">
            <div className="grid grid-cols-3 gap-24 mt-32">
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 1
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 2
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 3
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 4
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 5
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 6
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 7
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 8
                </div>
                <div className="text-White w-38 h-38 flex flex-col items-center justify-center">
                    <img src={table} alt="table" className="w-full h-full" />
                    Mesa 9
                </div>
            </div>
        </div>
    );
}

export default OrderTables;

