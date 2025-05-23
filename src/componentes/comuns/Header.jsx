// src/components/Header.jsx
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const startContent = <div>Gerenciador de Projetos Colaborativos</div>;

    // const endContent = () => {
    //     if (location.pathname.startsWith("/projeto")) {
    //         return <Button label="+ Projeto" onClick={() => navigate("/projeto")} />;
    //     } else if (location.pathname.startsWith("/projeto/")) {
    //         return <Button label="+ Tarefa" onClick={() => navigate(`${location.pathname}/tarefa/novo`)} />;
    //     }
    //     return null; // no login não mostra
    // };

    return <Toolbar start={startContent} /*end={endContent()}*/ />;
};

export default Header;
