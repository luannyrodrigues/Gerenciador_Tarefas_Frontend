import { useContext } from "react";
import ProjetoContext from "./ProjetoContext.jsx";
import Alerta from '../../comuns/Alerta.jsx';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { addUsuarioByIdAPI, getUsuarioPorEmailAPI } from "../../../servicos/ProjetoServico.jsx";
import { getStorage } from "../../../servicos/AuthServico.jsx";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(ProjetoContext);
    const navigate = useNavigate();

    const nomeUsuario = getStorage('nome') || "usuário desconhecido";

    const [dlgVisible, setDlgVisible] = useState(false);
    const [idProjetoAddUser, setIdProjetoAddUser] = useState();
    const [email, setEmail] = useState('');

    const adicionarUsuario = async () => {
        const idUsuario = await getUsuarioPorEmailAPI({email: email}, "POST");
        await addUsuarioByIdAPI({idProjeto: idProjetoAddUser, idUsuario: idUsuario}, "POST")
    }

    const botoesAcoes = (rowData) => (
        <div style={{display: 'flex', gap: 5}}>
            <Button icon="pi pi-eye" severity="info" onClick={() => {navigate('/projeto');
                sessionStorage.setItem("projeto", JSON.stringify(rowData.id));
            }}/>
            <Button icon="pi pi-plus-circle" severity="info" onClick={() => {
                setDlgVisible(true);
                setIdProjetoAddUser(rowData.id);
            }} />
            <Button icon="pi pi-pencil" severity="info" onClick={() => editarObjeto(rowData.id)} />
            {getStorage('tipo') === 'A' ? (<Button icon="pi pi-trash" severity="danger" onClick={() => remover(rowData.id)} />) : null}
        </div>
    );

    return (
        <div className="p-4">
            <h1>Projetos de {nomeUsuario}</h1>
            <Alerta alerta={alerta} />
            <div className="my-3">
                <Button label="Novo" icon="pi pi-file" className="p-button-primary" style={{margin: 10}} onClick={novoObjeto} />
            </div>
            {listaObjetos.length === 0 ? (
                <h2>Nenhum projeto encontrado</h2>
            ) : (
                <DataTable value={listaObjetos} paginator rows={5} responsiveLayout="scroll">
                    <Column body={botoesAcoes} header="Ações" style={{ textAlign: 'center', width: '15rem' }} />
                    <Column field="nome" header="Nome" />
                    <Column field="descricao" header="Descrição" />
                </DataTable>
            )}
            <Dialog header='Adicionar usuário ao projeto' visible={dlgVisible} onHide={() => setDlgVisible(false)}>
                <InputText 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Button label="Adicionar" onClick={() => adicionarUsuario()}/>
            </Dialog>
        </div>
    );
}

export default Tabela;
