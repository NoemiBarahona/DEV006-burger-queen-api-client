// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { requestLogin } from '../funtions/funtions';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

function InputLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'correo') {
            setEmail(value);
        } else if (name === 'contrasena') {
            setPassword(value);
        }
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

        if (!email || !password) {
            setErrorMessage('Verifica que los campos no esten vacíos.');
            return;
        }

        try {
            const data = await requestLogin(email, password);
            const { accessToken, user: { role } } = data;
            localStorage.setItem('token', accessToken);
            localStorage.setItem('role', role);

            switch (role) {
                case 'admin':
                    navigate('/adminView');
                    break;
                case 'waiter':
                    navigate('/waiterview');
                    break;
                case 'chef':
                    navigate('/chefview');
                    break;
                default:
                    console.log('Default case');
                    break;
            }
        } catch (error) {
            console.log('Error:', error.message);
            // Check the error message from the server and handle specific cases
            if (error.message === 'Credenciales no válidas') {
                setErrorMessage('Correo electrónico o contraseña no válidos.');
            } else {
                setErrorMessage('Ocurrió un error, verifica tus datos.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-White ">
            <div className="flex flex-col items-center text-3xl ">
                <label htmlFor="correo" className="text-left">
                    Correo electrónico:
                </label>
                <div className="w-4/5 flex justify-center pt-5">
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={email}
                        onChange={handleInputChange}
                        required
                        className="items-center bg-DarkBlue border-4 border-GreenLight rounded-3xl py-2 px-4 w-full h-20"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center text-3xl pt-9 text-White">
                <label htmlFor="contrasena" className="text-left">
                    Contraseña:
                </label>
                <div className="w-4/5 flex justify-center pt-5 pb-8">
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={password}
                        onChange={handleInputChange}
                        required
                        className="text-left  bg-DarkGreen border-4 bg-opacity-1 border-GreenLight rounded-3xl py-2 px-4 w-full h-20"
                    />
                </div>
                {/* Show the error message in real-time */}
                {errorMessage && <div className="text-Pink">{errorMessage}</div>}
            </div>
            <button
                onClick={handleLogin}
                type="submit"
                className="text-3xl justify-center flex mx-64 mt-96 bg-GreenLight border-4 text-Black rounded-3xl py-4 px-4 shadow-lg w-2/5 h-20 stroke-15 stroke-GreenLight blur-12.5"
            >
                Iniciar Sesión
            </button>
        </form>
    );
}

export default InputLogin;
