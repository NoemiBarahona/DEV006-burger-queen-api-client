// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation para acceder al estado pasado en la navegación
import 'tailwindcss/tailwind.css'
import OrderTable from './tables.jsx';
import Logocara from '../logopequeño';
import WelcomeUser from '../adminview/welcome.jsx';

function WaiterView() {
    const location = useLocation();
    const { role, email } = location.state || {};
    const username = email ? email.split('@')[0] : '';

    const tables = [
        { tableNumber: 1, isClickable: true },
        { tableNumber: 2, isClickable: true },
        { tableNumber: 3, isClickable: true },
        { tableNumber: 4, isClickable: true },
        { tableNumber: 5, isClickable: true },
        { tableNumber: 6, isClickable: true },
        { tableNumber: 7, isClickable: true },
        { tableNumber: 8, isClickable: true },
        { tableNumber: 9, isClickable: true },
    ];

    return (
        <div className="min-w-full bg-DarkBlue ">
            <div> 
            <Logocara />
            </div>
            <div className='pt-10 lg:pt-2'>
            <WelcomeUser rol={role} user={username} />
            </div>

            {/* Use grid to display tables */}
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-20 p-20 lg:gap-8 lg:p-8">
                {tables.map((table) => (
                    <OrderTable
                        key={table.tableNumber}
                        tableNumber={table.tableNumber}
                        isClickable={table.isClickable}
                    />
                ))}
            </div>
        </div>
    );
}

export default WaiterView;