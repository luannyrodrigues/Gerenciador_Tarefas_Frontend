import { ProgressSpinner } from 'primereact/progressspinner';

export default function Carregando({ carregando, children }) {
    return (
        <>
            {
                !carregando ? children :
                    <div className="flex align-items-center gap-3 m-5">
                        <strong role="status">Carregando...</strong>
                        <ProgressSpinner style={{ width: '30px', height: '30px' }} strokeWidth="4" animationDuration=".5s" />
                    </div>
            }
        </>
    );
}
