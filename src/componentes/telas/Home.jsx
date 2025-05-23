//TODO acho q dá pra apagar isso aqui tbm

// // src/pages/Home/HomePage.jsx
// import { useState, useEffect } from "react";
// import Carregando from "../comuns/Carregando.jsx";
// import { getProjetoDoUsuarioAPI } from "../../servicos/ProjetoUsuarioServico.jsx";
// import { Button } from "primereact/button";

// function HomePage() {
//     const [alerta, setAlerta] = useState({ status: "", message: "" });
//     const [listaProjetos, setListaProjetos] = useState([]);
//     const [carregando, setCarregando] = useState(false);

//     const recuperaProjetos = async () => {
//         setCarregando(true);
//         try {
//             const usuarioLogado = JSON.parse(localStorage.getItem("usuario")); 
//             const projetos = await getProjetoDoUsuarioAPI(usuarioLogado.id); //TODO provisorio 
//             setListaProjetos(projetos);
//         } catch (err) {
//             setAlerta({ status: "error", message: "Erro ao recuperar os projetos." });
//         } finally {
//             setCarregando(false);
//         }
//     };

//     useEffect(() => {
//         recuperaProjetos();
//     }, []);

//     return (
//         <div>
//             <h2>Meus Projetos</h2>

//             <Carregando carregando={carregando}>
//                 {alerta.message && (
//                     <div className={`alert alert-${alerta.status}`}>
//                         {alerta.message}
//                     </div>
//                 )}

//                 {listaProjetos.length === 0 ? (
//                     <p>Nenhum projeto encontrado.</p>
//                 ) : (
//                     <ul>
//                         {listaProjetos.map((projeto) => (
//                             <Button>{projeto.id} {projeto.nome} {projeto.descricao}</Button>
//                         ))}
//                     </ul>
//                 )}
//             </Carregando>
//         </div>
//     );
// }

// export default HomePage;
