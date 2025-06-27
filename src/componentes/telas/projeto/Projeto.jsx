import { useState, useEffect } from "react";
import ProjetoContext from "./ProjetoContext.jsx";
import {
    cadastraProjetoAPI,
    deleteProjetoPorIdAPI,
    getProjetoPorIdAPI,
    getProjetoDoUsuarioAPI
} from "../../../servicos/ProjetoServico.jsx";
import Tabela from "./Tabela.jsx";
import Formulario from "./Formulario.jsx";
import Carregando from "../../comuns/Carregando.jsx";
import { getStorage } from "../../../servicos/AuthServico.jsx";

function Projeto() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(false);

    const recuperaProjetos = async () => {
        setCarregando(true);
        setListaObjetos(await getProjetoDoUsuarioAPI(getStorage('id')));
        setCarregando(false);
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este projeto?')) {
            let retornoAPI = await deleteProjetoPorIdAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaProjetos();
        }
    }

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        id: "", nome: "", descricao: ""
    })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ id: 0, nome: "", descricao: "" });
        setExibirForm(true);
    }

    const editarObjeto = async id => {
        setObjeto(await getProjetoPorIdAPI(id));
        setEditar(true);
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraProjetoAPI(getStorage('id'), objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) setEditar(true);
        } catch (err) {
            console.error(err.message);
        }
        recuperaProjetos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    useEffect(() => {
        recuperaProjetos();
    }, []);

    return (
        <ProjetoContext.Provider value={{
            alerta, listaObjetos, remover, objeto, editarObjeto,
            acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
        }}>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </ProjetoContext.Provider>
    )
}

export default Projeto;
