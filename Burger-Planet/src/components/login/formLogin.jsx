// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { requestLogin } from '../funtions/funtions';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

function InputLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authData, setAuthData] = useState(null);
    // const [errormessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones con el correo electrónico y la contraseña ingresados
        console.log('Correo electrónico:', email);
        console.log('Contraseña:', password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await requestLogin(email, password)
            setAuthData(data)
            const tokenUser = data.accessToken;
            localStorage.setItem("token", tokenUser);
            const roleUser = data.user.role;
            localStorage.setItem("role", roleUser);


            switch (roleUser) {
                case 'admin':
                    navigate('/adminView')
                    break;
                case 'waiter':
                    navigate('/waiterview')
                    break;
                case 'chef':
                    navigate('/chefview')
                    break;
                default:
                    console.log('default case')
                    break;
            }
        }
        catch (error) {
            console.log("TENEMOS ERROR", error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-White ">
            <div className="flex flex-col items-center text-3xl pt-12">
                <label htmlFor="correo" className="text-left">Correo electrónico:</label>
                <div className="w-4/5 flex justify-center pt-5">
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="items-center bg-DarkBlue border-4 border-GreenLight rounded-3xl py-2 px-4 w-full h-20"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center text-3xl pt-9">
                <label htmlFor="contrasena" className="text-left">Contraseña:</label>
                <div className="w-4/5 flex justify-center pt-5 pb-12">
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="text-left bg-DarkBlue border-4 border-GreenLight rounded-3xl py-2 px-4 w-full h-20"
                    />
                </div>
            </div>
            <button onClick={handleLogin} type="submit" className="text-3xl justify-center flex mx-auto bg-GreenLight border-4 text-Black rounded-3xl py-2 px-4 shadow-lg w-2/5 h-20 stroke-15 stroke-GreenLight blur-12.5">
                Iniciar Sesión
            </button>
        </form>
    );
}

export default InputLogin;