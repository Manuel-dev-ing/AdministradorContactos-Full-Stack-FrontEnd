import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import ContactosPage from "./views/ContactosPage";
import GruposPage from "./views/GruposPage";
import ListadoGruposPage from "./views/ListadoGruposPage";


export default function AppRouter(){

    return (

        <BrowserRouter>
            <Routes>

                <Route element={<Layout/>}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/contactos" element={<ContactosPage />} />
                    <Route path="/grupos" element={<GruposPage />} />
                    
                    <Route path="/listadoGrupos" element={<ListadoGruposPage />} />

                </Route>

            </Routes>
        </BrowserRouter>
        
    )

}





