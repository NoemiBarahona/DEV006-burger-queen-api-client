// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'tailwindcss/tailwind.css'
import OrderTables from './tables.jsx';
import Logocara from '../logopequeño';

function WaiterView() {
    return (
        <>
            <div className="min-w-full bg-DarkBlue">
                <Logocara />
                <OrderTables />
            </div>
        </>
    )
}

export default WaiterView;