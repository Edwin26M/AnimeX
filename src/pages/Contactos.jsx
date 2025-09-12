export default function Contactos () {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(0,200,255,0.6)] p-8 max-w-lg w-full text-center anim-zoom">
                <h1 className="text-white"> ⚔️ ¡Conéctate con el gremio de cazadores! ⚔️ </h1>
                <br/>
                    <p className="text-white mb-6">
                        Escribenos y entra para conocernos la variedad de cosas que tenemos y convierte en un miembro de nostros
                        y sera invocado mas rapido que una sombra de Sung Jin Woo.
                    </p>
                    <div className="flex justify-center mb-9">
                         <img src="/sigma.jpeg"
                              alt="Sung Jin-Woo"
                              className="w-48 h-48 rounded-xl shadow-[0_0_20px_rgba(0,200,255,0.8)] border border-cyan-400 anim-zoom"
                          />
                    </div>
                    <div className="text-gray-300">
                        <p className="text-white">Encuentranos en:</p>
                        <div className="flex justify-center text-semibold gap-6 mt-3">
                            <a href="https://www.facebook.com/animenewsnetwork/">
                                <i className="fa-brands fa-facebook hover:text-cyan-300 fa-2x anim-zoom"></i>
                            </a>
                            <a href="https://x.com/AniTrendz">
                                <i className="fa-brands fa-x hover:text-cyan-300 fa-2x anim-zoom"></i>
                            </a>
                            <a href="https://discord.com/invite/crunchyroll?">
                                <i className="fa-brands fa-discord hover:text-cyan-300 fa-2x anim-zoom"></i>
                            </a>
                            <a href="https://www.tiktok.com/@crunchyroll">
                                <i className="fa-brands fa-tiktok hover:text-cyan-300 fa-2x anim-zoom"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}