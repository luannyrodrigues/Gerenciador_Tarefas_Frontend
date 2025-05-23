// src/pages/Login/FormLogin.jsx
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { getUsuariosAPI } from "../../../servicos/UsuarioServico";

const FormLogin = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            width: 'fit-content',
            gap: '2vh'
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const usuarios = await getUsuariosAPI(); 

            const usuario = usuarios.find((usuario) => usuario.email === email);

            if (!usuario) {
                setError("Usuário não encontrado");
                return;
            }

            if (usuario.senha !== senha) { 
                setError("Senha incorreta");
                return;
            }

            localStorage.setItem("usuario", JSON.stringify(usuario));
            navigate('/home'); 

        } catch (err) {
            setError("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div style={{'display': 'flex'}}>
            <div style={styles.container}>
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
