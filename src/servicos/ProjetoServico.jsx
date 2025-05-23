
export const getProjetoPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/projeto/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const deleteProjetoPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/projeto/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const cadastraProjetoAPI = async (idUsuario, objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/projeto/${idUsuario}`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}

export const getProjetoDoUsuarioAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/projetoUsuario/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getUsuarioPorEmailAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/getUsuarioByEmail`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}

export const addUsuarioByIdAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/projetoAddUsuario`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data; 
}

