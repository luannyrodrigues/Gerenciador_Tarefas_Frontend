import { jwtDecode } from "jwt-decode";

export const autenticaAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    sessionStorage.setItem("auth", JSON.stringify(data.auth));
    sessionStorage.setItem("token", JSON.stringify(data.token));
    sessionStorage.setItem("id", JSON.stringify(data.id));
    sessionStorage.setItem("nome", JSON.stringify(data.nome));
    sessionStorage.setItem("tipo", JSON.stringify(data.tipo));
    return data;
}

export const logout = () => {
    sessionStorage.clear();
}

export const getToken = () => {
    let token = sessionStorage.getItem("token").replace(/^"|"$/g, "");

    if (sessionStorage.getItem("auth") === false) {
        return null;
    } else {
        let decoded = jwtDecode(token);
        if (decoded.exp <= Math.floor(new Date() / 1000)){
            console.log('Token expirado');
            logout();
        } else {
            return token;
        }
    }
}

export const getStorage = (param) => {
    if (['id', 'projeto'].includes(param)) {
    return parseInt(sessionStorage.getItem(param));
}
    return sessionStorage.getItem(param).replace(/^"|"$/g, "");
}
