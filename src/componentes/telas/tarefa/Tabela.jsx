import { useContext } from "react";
import TarefaContext from "./TarefaContext.jsx";
import Alerta from '../../comuns/Alerta.jsx';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(TarefaContext);
    const navigate = useNavigate();

    const botoesAcoes = (rowData) => (
        <div className="justify-content-center">
            <Button icon="pi pi-pencil" severity="info" onClick={() => editarObjeto(rowData.id)} />
            <Button icon="pi pi-trash" severity="danger" onClick={() => remover(rowData.id)} />
        </div>
    );

    return (
        <div className="p-4">
            <h1>Tarefas</h1>
            <Alerta alerta={alerta} />
            <div className="my-3">
                <Button label="Novo" icon="pi pi-file" className="p-button-primary" onClick={novoObjeto} />
            </div>
            {listaObjetos.length === 0 ? (
                <h2>Nenhuma tarefa</h2>
            ) : (
                <DataTable value={listaObjetos} paginator rows={5} responsiveLayout="scroll">
                    <Column body={botoesAcoes} header="Ações" style={{ textAlign: 'center', width: '15rem' }} />
                    <Column field="titulo" header="Título" />
                    <Column field="descricao" header="Descrição" />
                    <Column field="status" header="Status" />
                </DataTable>
            )}
        </div>
    );
}

export default Tabela;
