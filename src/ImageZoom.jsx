import { useState } from "react";

const ImageZoom = () => {
    const [zoomImage, setZoomImage] = useState(null);

    const images = [
        "/solo%20leveling.jpg",
        "/frontier.jpeg",
        "/evangelion.jpg",
        "/Re%20zero.jpg",
        "/lycoris.png",
        "/dandadan.jpg",
        "/miku.jpg",
        "/tokyo.jpg",
        "/Ichigo.jpg",
    ];

    return (
        <div className="p-6 flex justify-center">
            {/* Grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`img-${index}`}
                        className="w-40 h-56 sm:w-44 sm:h-60 lg:w-48 lg:h-64 object-cover rounded-[9999px] cursor-pointer transition-transform duration-300 hover:scale-105 mx-auto"
                        onClick={() => setZoomImage(src)}
                    />
                ))}
            </div>

            {/* Modal de zoom */}
            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setZoomImage(null)}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={zoomImage}
                            alt="Zoom"
                            className="max-w-[90vw] max-h-[90vh] rounded-[9999px] shadow-lg"
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
