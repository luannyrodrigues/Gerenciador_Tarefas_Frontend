import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

const Alerta = ({ alerta }) => {
    const toast = useRef(null);

    useEffect(() => {
        if (alerta.message.length > 0) {
            toast.current.show({
                severity: alerta.status === 'error' ? 'error' : 'info',
                summary: alerta.status === 'error' ? 'Erro' : 'Informação',
                detail: alerta.message,
                life: 3000
            });
        }
    }, [alerta]);

    return (
        <Toast ref={toast} />
    );
};

export default Alerta;
