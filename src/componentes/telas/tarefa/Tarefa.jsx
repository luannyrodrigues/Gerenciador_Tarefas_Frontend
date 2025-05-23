import { useState, useEffect } from "react";
import TarefaContext from "./TarefaContext.jsx";
import Tabela from "./Tabela.jsx";
import Formulario from "./Formulario.jsx";
import Carregando from "../../comuns/Carregando.jsx";
import { cadastraTarefaAPI, getTarefasPorProjetoAPI, deleteTarefaPorIdAPI, getTarefaPorIdAPI } from "../../../servicos/TarefaServico.jsx";

function Projeto() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario")); 
    
    const idProjeto = JSON.parse(localStorage.getItem("projeto")); 

    const recuperaTarefas = async () => {
        setCarregando(true);
        setListaObjetos(await getTarefasPorProjetoAPI(idProjeto));
        setCarregando(false);
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover esta tarefa?')) {
            let retornoAPI = await deleteTarefaPorIdAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaTarefas();
        }
    }

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        id: "", titulo: "", descricao: "", status: '', idUsuario: usuarioLogado.id, idProjeto: idProjeto
    })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ id: 0, titulo: "", descricao: "", status: '', idUsuario: usuarioLogado.id, idProjeto: idProjeto });
        setExibirForm(true);
    }

    const editarObjeto = async id => {
        setObjeto(await getTarefaPorIdAPI(id));
        console.log(await getTarefaPorIdAPI(id));
        setEditar(true);
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
         e.preventDefault();
         const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraTarefaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) setEditar(true);
        } catch (err) {
            console.error(err.message);
        }
        recuperaTarefas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    useEffect(() => {
        recuperaTarefas();
    }, []);

    return (
        <TarefaContext.Provider value={{
            alerta, listaObjetos, remover, objeto, editarObjeto,
            acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
        }}>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </TarefaContext.Provider>       
    )
}

export default Projeto;
