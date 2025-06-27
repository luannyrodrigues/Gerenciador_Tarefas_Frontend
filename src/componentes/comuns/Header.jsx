import { Toolbar } from "primereact/toolbar";

const Header = () => {
    const startContent = <div>Gerenciador de Projetos Colaborativos</div>;

    return <Toolbar start={startContent} />;
};

export default Header;
