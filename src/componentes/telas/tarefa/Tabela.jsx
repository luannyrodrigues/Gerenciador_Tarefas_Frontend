import { useContext } from "react";
import TarefaContext from "./TarefaContext.jsx";
import Alerta from '../../comuns/Alerta.jsx';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getStorage } from "../../../servicos/AuthServico.jsx";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(TarefaContext);

    const botoesAcoes = (rowData) => (
        <div style={{display: 'flex', gap: 5}}>
            <Button icon="pi pi-pencil" severity="info" onClick={() => editarObjeto(rowData.id)} />
            { getStorage('tipo') === 'A' ? (<Button icon="pi pi-trash" severity="danger" onClick={() => remover(rowData.id)} />) : null}
        </div>
    );

    return (
        <div className="p-4">
            <h1>Tarefas</h1>
            <Alerta alerta={alerta} />
            <div className="my-3">
                <Button label="Novo" icon="pi pi-file" className="p-button-primary" onClick={novoObjeto} style={{margin: 10}}/>
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
