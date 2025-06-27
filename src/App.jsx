import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/viva-dark/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import React from "react";
import 'primereact/resources/primereact.min.css';
import { router } from './router.js'

const App = () => {
  return (
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  );
};

export default App;
