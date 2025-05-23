import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { cadastraUsuarioAPI } from "../../../servicos/UsuarioServico"; 

const Cadastro = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            width: 'fit-content',
            gap: '2vh'
        }
    };

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isEmailValido = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        setError('');

        if (!nome || !email || !senha) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        if (!isEmailValido(email)) {
            setError("Informe um e-mail válido.");
            return;
        }

        if (senha.length < 6) {
            setError("A senha deve conter pelo menos 6 caracteres.");
            return;
        }

        const novoUsuario = { nome, email, senha };

        try {
            const retornoAPI = await cadastraUsuarioAPI(novoUsuario, 'POST');
            if (retornoAPI.status === 'success') {
                navigate('/'); 
            } else {
                setError(retornoAPI.message);
            }
        } catch (err) {
            setError("Erro ao cadastrar usuário. Tente novamente.");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Cadastro</h2>
            <InputText 
                placeholder="Nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
            />
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
            <Button label="Cadastrar" onClick={handleCadastro} />
        </div>
    );
};


export default Cadastro;
