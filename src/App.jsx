import Home from "./Home.jsx";
import { Routes, Route} from "react-router-dom";
import Contactos from "./pages/Contactos.jsx";
import Conocenos from "./pages/Conocenos.jsx";
import Layout from "./Layout.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="conocenos" element={<Conocenos /> } />
                    <Route path="contactos" element={<Contactos /> } />
                </Route>
            </Routes>
        </>
    );
    // Dato importante el App.jsx no es una pagina es donde van las rutas a manejar como lo que se ve ahorita.
    // Los route lo que es element no pueden ir sin su / porque no funcionaria entonces es
    // element={<Contactos /> /} de esa manera funcionaria con un index y es recombendable hacer un layout
    // y no olvidar poner BroweRuters en el main.jsx para que empiece a trabajar en el app y importar en un
    // {} el {Route, Routes} el Link se queda en layout con el Outlet que carga las paginas.
}

export default App;