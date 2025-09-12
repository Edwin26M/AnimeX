import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="flex items-center justify-between bg-gradient-to-b from-black via-[#1a103d] to-[#3b0764] p-4 md:p-6">
                    {/* Logo / Inicio */}
                    <Link to="/" className="font-bold text-white text-lg md:text-xl">
                        Inicio
                    </Link>

                    {/* Botón hamburguesa solo en móvil */}
                    <button
                        className="text-white text-2xl md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    {/* Menú en escritorio */}
                    <div className="hidden md:flex gap-6 md:gap-20">
                        <Link
                            to="/Conocenos"
                            className="font-bold text-white text-lg md:text-xl hover:text-cyan-300"
                        >
                            Conócenos
                        </Link>
                        <Link
                            to="/contactos"
                            className="font-bold text-white text-lg md:text-xl hover:text-cyan-300"
                        >
                            Contactos
                        </Link>
                    </div>
                </nav>

                {/* Menú hamburguesa desplegable en móvil */}
                {menuOpen && (
                    <div className="flex flex-col bg-[#1a103d] p-4 md:hidden space-y-3">
                        <Link
                            to="/Conocenos"
                            className="font-bold text-white text-lg hover:text-cyan-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Conócenos
                        </Link>
                        <Link
                            to="/contactos"
                            className="font-bold text-white text-lg hover:text-cyan-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contactos
                        </Link>
                    </div>
                )}
            </header>

            <main className="min-h-screen">
                <Outlet />
            </main>
        </>
    );
}
