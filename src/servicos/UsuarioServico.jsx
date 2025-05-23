export const getUsuariosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
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

//TODO se sobrar tempo pra criar uma tela pra controlar os usuarios dá pra implementar isso

// export const getUsuarioPorCodigoAPI = async codigo => {
//     const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${codigo}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//     });
//     const data = await response.json();
//     return data;
// }

// export const deleteUsuarioPorCodigoAPI = async codigo => {
//     const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${codigo}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" }
//     });
//     const data = await response.json();
//     return data;
// }