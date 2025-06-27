import { createBrowserRouter } from "react-router-dom";
import Layout from "./componentes/comuns/Layout";
import Cadastro from "./componentes/telas/cadastro/Cadastro";
import FormLogin from "./componentes/telas/login/FormLogin";
import Projeto from "./componentes/telas/projeto/Projeto";
import Tarefa from "./componentes/telas/tarefa/Tarefa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FormLogin />,
      },
      {
        path: "projeto",
        element: <Tarefa />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "home",
        element: <Projeto />,
      },
    ],
  },
]);
