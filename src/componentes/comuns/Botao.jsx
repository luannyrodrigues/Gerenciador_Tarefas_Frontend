import { Button } from "primereact/button";

const BotaoPrimario = ({ label, onClick, severity = "primary" }) => {
    return <Button label={label} onClick={onClick} severity={severity} />;
};

export default BotaoPrimario;
