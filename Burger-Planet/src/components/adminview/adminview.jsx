// eslint-disable-next-line no-unused-vars
// import React from 'react';
import LogoLetters from './logoCaraLetras.jsx'
import AdminButtons from './buttonAdmin.jsx';
import WelcomeUser from './welcome.jsx';
import 'tailwindcss/tailwind.css'

function AdminHome() {
    return (
        <>
            <div className="min-w-full bg-DarkBlue pt-12">
                <LogoLetters />
                <WelcomeUser rol={'admin'} user={'Juanito Perez'} />
                <AdminButtons />
            </div>
        </>
    )
}

export default AdminHome;