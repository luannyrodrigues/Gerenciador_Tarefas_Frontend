import { useContext } from 'react';
import Alerta from '../../comuns/Alerta.jsx';
import ProjetoContext from './ProjetoContext';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(ProjetoContext);

    const footer = (
        <div className="flex justify-content-end gap-2">
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={() => setExibirForm(false)} />
            <Button label="Salvar" icon="pi pi-check" className="p-button-primary" onClick={acaoCadastrar} />
        </div>
    );

    return (
        <Dialog header="Projeto" visible={exibirForm} style={{ width: '30vw' }}
            modal className="p-fluid" onHide={() => setExibirForm(false)} footer={footer}>
            
            <Alerta alerta={alerta} />

            <div className="field">
                <label htmlFor="nome">Nome *</label>
                <InputText id="nome" name="nome" value={objeto.nome} onChange={handleChange}
                    maxLength={40} required />
            </div>

            <div className="field">
                <label htmlFor="descricao">Descrição</label>
                <InputText id="descricao" name="descricao" value={objeto.descricao} onChange={handleChange}
                    maxLength={100} />
            </div>
        </Dialog>
    );
}

export default Formulario;
