import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { cadastraUsuarioAPI } from "../../../servicos/UsuarioServico"; 

const Cadastro = () => {
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

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('U'); // Valor padrão: usuário comum
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isEmailValido = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        setError('');

        if (!nome || !email || !senha || !tipo) {
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

        const novoUsuario = { nome, email, senha, tipo };

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

    const opcoesTipo = [
        { label: 'Administrador', value: 'A' },
        { label: 'Usuário Comum', value: 'U' }
    ];

    return (
        <div style={styles.box}>
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
                <Dropdown 
                    value={tipo} 
                    options={opcoesTipo} 
                    onChange={(e) => setTipo(e.value)} 
                    placeholder="Selecione o tipo de usuário"
                    style={{ width: '100%' }}
                />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Button label="Cadastrar" onClick={handleCadastro} />
            </div>
        </div>
    );
};

export default Cadastro;
