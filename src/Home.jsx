import { Form } from "./Form.jsx";
import ImageZoom from "./ImageZoom.jsx";

export default function Home() {
    return (
        <>
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-6">
                Danos tus Gustos
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] lg:min-h-screen px-4 lg:px-12 gap-6">

                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md">
                        <Form />
                    </div>
                </div>


                <div className="flex justify-center w-full max-w-lg">
                    <ImageZoom />
                </div>
            </div>
        </>
    );
}
