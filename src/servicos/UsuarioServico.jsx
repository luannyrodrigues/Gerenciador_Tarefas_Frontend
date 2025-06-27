import { getToken } from "./AuthServico";


export const getUsuariosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": getToken() }
    });
    const data = await response.json();
    return data;
}

export const cadastraUsuarioAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}