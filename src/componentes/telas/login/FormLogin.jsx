import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { autenticaAPI, getStorage } from "../../../servicos/AuthServico";

const FormLogin = () => {
    const styles = {
        box: {
            display: "flex",
            width: '100%',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            display: "flex",
            flexDirection: "column",
            width: 'fit-content',
            gap: '2vh',
            flexWrap: 'wrap',
            marginBottom: '10vw',
            alignItems: 'center'
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await autenticaAPI({email, senha}, 'post');
            if (getStorage('auth')) {
                navigate('/home');
            }
        } catch (error) {   
            setError(error);
        }
    };

    return (
        <div style={styles.box}>
            <div style={styles.container}>
                <h1>GoJira</h1>
                <h2>Gerenciador de Tarefas</h2>
                <InputText 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Password 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Button label="Entrar" onClick={handleLogin} />
                <Button 
                    label="Ainda não possui conta? Cadastre" 
                    onClick={() => navigate('/cadastro')} 
                    link 
                    style={{ fontSize: '0.7rem' }} 
                />
            </div>
        </div>
    );
};

export default FormLogin;
