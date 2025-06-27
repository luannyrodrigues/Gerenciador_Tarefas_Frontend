import { getToken } from "./AuthServico";

export const getTarefasPorProjetoAPI = async (projeto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tarefaProjeto/${projeto}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": getToken() }
    });
    const data = await response.json();
    return data;
}

export const cadastraTarefaAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tarefa`, {
        method: metodo,
        headers: { "Content-Type": "application/json", "Authorization": getToken() },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}

export const deleteTarefaPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tarefa/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Authorization": getToken() }
    });
    const data = await response.json();
    return data;
}

export const getTarefaPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tarefa/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": getToken() }
    });
    const data = await response.json();
    return data;
}

