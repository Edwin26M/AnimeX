import { useState } from "react";



// aquí le das valor a los valores que quieres cambiar con useState con su function de set
// que le das nombre al que vas a usar como user y después el que lo va a cambiar el setUser
export function Form() {
    const [form, setForm] = useState({
        nombre:"",
        edad:"",
        correo:"",
        genero:"",
        anime:"",
        comentario:""
    });


    // Es el que maneja los cambios en las constantes seleccionadas
    // que el setForm es el que hace los cambios.
    // La (e) es el que te va a recoger toda la información es un evento sintético y él e.target es que dispara
    // los eventos sin necesidad de hacer para cada uno.
    function handleChange(e){
        const {name, type, value,checked} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]:type === "checkbox" ? checked : value
            }));
    }


    // es el que le da la funcion a la hora de enviar puedes verlo en consola o en una alerta
    function handleSubmit(e){
        // el preventDefault funciona para que no se recarge la pagina y no pierdas los datos en la consola
        // y tenga funcion la alerta
        e.preventDefault();
        if (!form.nombre && !form.correo && !form.edad && !form.genero && !form.anime && !form.comentario ) {
            alert("Llena todos los campos");
            return;
        }
        if (!form.nombre.trim()) {
            alert("Te falta poner el nombre");
            return;
        }
        if (!form.correo.trim()) {
            alert("Te falto poner correo");
            return;
        }
        if (!form.edad.trim()) {
            alert("Poner la edad");
            return;
        }
        if (!form.genero.trim()) {
            alert("Seleciona tu genero")
            return;
        }
        console.log(form);
        alert(
            `Nombre: ${form.nombre}\n
             Correo: ${form.correo}\n
             Edad: ${form.edad}\n
             Género: ${form.genero}\n
             Anime: ${form.anime}\n
             Comentario: ${form.comentario}`
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col w-[400px] pl-[20px] mt-[5px] space-y-3">
                <h3 className="text-white font-bold">Queremos saber un poco de lo que te gusta para darte una pequeña recommendation
                    asi que nos apoyarías mucho llenando la informacion que te pedimos.</h3>
                <br/>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre Completo"
                    className="border p-2 rounded-full bg-white text-black font-bold"
                />
                <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="Correo"
                    className="border p-2 rounded-full bg-white text-black font-bold"
                />
                <input
                    type="number"
                    name="edad"
                    value={form.edad}
                    onChange={handleChange}
                    placeholder="Edad"
                    min="0"
                    max="100"
                    className="border p-2 rounded-full bg-white text-black font font-bold"
                />
                <div className="space-x-10 font-bold text-white">
                    <label>
                        <input
                            type="radio"
                            name="genero"
                            value="hombre"
                            checked={form.genero === "hombre"}
                            onChange={handleChange}
                        />
                        Hombre
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="genero"
                            value="mujer"
                            checked={form.genero === "mujer"}
                            onChange={handleChange}
                        />
                        Mujer
                    </label>
                </div>
                <h3 className="text-white font-bold">Cual te gusta mas</h3>
                <select
                name="anime"
                value={form.anime}
                onChange={handleChange}
                className="border p-2 rounded-full bg-white text-black font-bold">
                    <option value="">Seleccione</option>
                    <option value="Solo Leveling">Solo Leveling</option>
                    <option value="Lycoris Recoil">Lycoris Recoil</option>
                    <option value="Tokyo Ghoul">Tokyo Ghoul</option>
                    <option value="Jashin-chan: Dropkick on My Devil X">Jasmin-chan: Dropkick on My Devil X</option>
                    <option value="Shangri la Frontier">Shangri la Frontier</option>
                    <option value="Re Zero">Re Zero</option>
                    <option value="Neon Genesis Evangelion">Neon Genesis Evangelion</option>
                    <option value="DanDaDan">DanDaDan</option>
                    <option value="Todo">Todo</option>
                </select>

                <label className="font-bold text-white">Comentarios o recomendaciones</label>
                <textarea
                name="comentario"
                value={form.comentario}
                onChange={handleChange}
                rows="4"
                cols="70"
                placeholder="Escribe tu comentario aqui"
                className="bg-white text-black font-bold p-3 w-full focus:outline-none focus:ring-2 border-black"></textarea>

                <button type="submit" className="bg-blue-400 text-black p-3 rounded-full font-bold">
                    Enviar
                </button>
            </form>
        </>
    );
}
