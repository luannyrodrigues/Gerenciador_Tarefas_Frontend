import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/viva-dark/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormLogin from "./componentes/telas/login/FormLogin";
import Projeto from "./componentes/telas/projeto/Projeto.jsx";
import Tarefa from "./componentes/telas/tarefa/Tarefa.jsx";
import Cadastro from "./componentes/telas/cadastro/Cadastro.jsx";
import React from "react";
import Layout from "./componentes/comuns/Layout.jsx";
import 'primereact/resources/primereact.min.css';

const App = () => {
  const router = createBrowserRouter([
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

  return (
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  );
};

export default App;
