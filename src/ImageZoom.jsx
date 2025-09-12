import  { useState } from "react";

const ImageZoom = () => {
    const [zoomImage, setZoomImage ] = useState(null);

    const images =[
        "/solo%20leveling.jpg",
        "/frontier.jpeg",
        "/evangelion.jpg",
        "/Re%20zero.jpg",
        "/lycoris.png",
        "/dandadan.jpg",
        "/miku.jpg",
        "/tokyo.jpg"
    ];
    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 p-4 pr-50">
                {images.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    alt={`img-${index}`}
                    className="w-40 h-40 object-cover rounded-full cursor-pointer anim-zoom"
                    onClick={() => setZoomImage(src)}
                    />
                ))}
            </div>

            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setZoomImage (null)}
                >
                <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={zoomImage}
                        alt="Zoom"
                        className="max-w-[100vh] max-h-[100vh] rounded-x1 shadow-lg"
                        // si quieres que aparesca un scroll osea el que maneja el movimiento de pantalla
                        // puedes usar overflow para que aparezca un scoll ya se vertcal o horizontal
                        // vertical es overflow-y-auto la y es el lado donde va aparecer es como un plano cartesiano
                        // horizontal es overflow-x-auto
                        // y max-h es cuando quieres darle a una imagen el tamaño definido y que no pase de ahi y
                        // si lo quieres pues agregas el overflow
                    />
                    <button
                        className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex
                         items-center justify-center font-bold shadow-md hover:bg-gray-200"
                        onClick={() => setZoomImage(null)}
                    >
                        X
                    </button>
                </div>
                </div>
            )}
        </div>
    );
};

export default ImageZoom;
