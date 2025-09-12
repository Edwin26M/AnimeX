import { Form } from "./Form.jsx";
import ImageZoom from "./ImageZoom.jsx";

export default function Home () {
    return (
        <>
            <h1 className="text-center text-4xl text-white mb-5">Danos tus Gustos</h1>
            <div className="flex h-screen">
                <div className="flex-1 flex justify-center">
                    <Form />
                </div>
                <ImageZoom/>
            </div>
        </>
    );
}