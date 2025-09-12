import {Link, Outlet} from "react-router-dom";

export default function Layout () {
    return (
        <>
            <header>
              <nav className="flex bg-gradient-to-b from-black via-[#1a103d] to-[#3b0764] p-6 gap-20">
                  <Link to="/" className="font-bold text-white text-xl">Inicio</Link>
                  <Link to="/Conocenos" className="font-bold text-white text-xl">Conocenos</Link>
                  <Link to="/contactos" className="font-bold text-white text-xl">Contactos</Link>
              </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}