import Carrusel from "./Carrusel.jsx";

export default function Conocenos () {
    return (
        <>
            <div className="flex flex-row items-center mt-20 mb-20 max-lg:flex-col max-lg:mb-0 bg-gradient-to-b from-black via-gray-900 to-blue-950 min-h-screen">
                <div className="flex-1 pr-15 pl-5">
                    <p className="text-white text-center text-xl">Tu lugar favorito para descubrir y disfrutar anime en alta calidad.
                    </p>
                    <br/>
                    <p className="text-white text-center text-xl">Nosotros ofrecemos las mejores series de anime que puedas ver con una buena calidad y ofreciendo las series el mismo dia que se publican en Japon no te pierdas de nada y mantente al tanto con nosotros.</p>
                </div>
                <div className="flex-1">
                    <Carrusel/>
                </div>
            </div>

            <div className=" max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-black text-center text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
                <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-2 max-lg:mb-10 max-md:grid-cols-1 max-md:gap-2 max-sm:grid-cols-1 max-sm:gap-2">
                    <div className="bg-blue-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Variedad de contenido</h3>
                        <p>Ofrecemos una amplia gama de series de anime, desde clásicos hasta los más recientes lanzamientos.</p>
                    </div>
                    <div className="bg-green-400 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Calidad de transmisión</h3>
                        <p>Nuestra plataforma garantiza una experiencia de visualización fluida y de alta calidad.</p>
                    </div>
                    <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Actualizaciones frecuentes</h3>
                        <p>Nos aseguramos de mantener nuestro catálogo actualizado con las últimas series y episodios.</p>
                    </div>
                </div>
            </div>
            <section className="py-16 px-4 md:px-20 bg-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-10">Nuestros Openings Favoritos</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <video
                        className="w-64 h-36 rounded-lg shadow-lg"
                        src="/Love%20Love%20Song.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>
                    <video
                        className="w-64 h-36 rounded-lg shadow-lg"
                        src="/Bling-Bling-Born.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </section>

        </>
    );
}