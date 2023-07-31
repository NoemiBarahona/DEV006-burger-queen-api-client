import axios from "axios";

export async function requestLogin(email, password) {
    // objeto con login, etc 
    const loginData = {
        email: email,
        password: password,
    }

    try {
        const requestAxios = await axios.post("http://localhost:8080/login", loginData, { headers: { "content-type": "application/json", } })
        if (requestAxios.status === 200) {
            return requestAxios.data;
        }
        console.log(requestAxios);
    }
    catch (error) {
        console.log("TENEMOS ERROR", error)
    }
}

