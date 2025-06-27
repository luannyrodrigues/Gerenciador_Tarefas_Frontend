import { InputText } from "primereact/inputtext";

const CampoEntrada = ({
    id,
    name,
    label,
    tipo = "text",
    value,
    onchange,
    readonly = false,
    requerido = false,
    maxCaracteres,
    placeholder,
}) => {
    return (
        <div className="field">
            {label && <label htmlFor={id}>{label}{requerido && " *"}</label>}
            <InputText
                id={id}
                name={name}
                type={tipo}
                value={value}
                onChange={onchange}
                readOnly={readonly}
                required={requerido}
                maxLength={maxCaracteres}
                placeholder={placeholder}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default CampoEntrada;
