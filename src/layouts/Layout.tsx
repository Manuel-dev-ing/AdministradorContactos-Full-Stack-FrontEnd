import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Aside from "../components/Aside";
import { useContactoStore } from "../store";
import { useEffect } from "react";


export default function Layout(){

    const obtenerContactos = useContactoStore((state) => state.obtenerContactos)


    useEffect(()=>{
        obtenerContactos()
    }, [])

    return (
        <>  
            <Header />

            <Aside />

            <main className="main">
                <Outlet />
            </main>
        
        </>
    )

}




