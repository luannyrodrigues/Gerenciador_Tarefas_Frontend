import { useContext } from 'react';
import Alerta from '../../comuns/Alerta.jsx';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TarefaContext from './TarefaContext.jsx';
import { Dropdown } from 'primereact/dropdown';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(TarefaContext);
    const status= [
        { label: 'Pendente', value: 'P' },
        { label: 'Em andamento', value: 'A' },
        { label: 'Concluído', value: 'C' },
    ];


    const footer = (
        <div className="flex justify-content-end gap-2">
            <Button label="Fechar" icon="pi pi-times" className="p-button-text" onClick={() => setExibirForm(false)} />
            <Button label="Salvar" icon="pi pi-check" className="p-button-primary" onClick={acaoCadastrar} />
        </div>
    );

    return (
        <Dialog header="Tarefa" visible={exibirForm} style={{ width: '30vw' }}
            modal className="p-fluid" onHide={() => setExibirForm(false)} footer={footer}>
            
            <Alerta alerta={alerta} />

            <div className="field">
                <label htmlFor="titulo">Título *</label>
                <InputText id="titulo" name="titulo" value={objeto.titulo} onChange={handleChange}
                    maxLength={40} required />
            </div>

            <div className="field">
                <label htmlFor="descricao">Descrição</label>
                <InputText id="descricao" name="descricao" value={objeto.descricao} onChange={handleChange}
                    maxLength={100} />
            </div>

            <div className="field">
            <Dropdown
                id="status"
                value={objeto.status}
                options={status}
                onChange={(e) => handleChange({ target: { name: "status", value: e.value } })}
                optionLabel="label"
                placeholder="Selecione o status"
                />
            </div>
        </Dialog>
    );
}

export default Formulario;

