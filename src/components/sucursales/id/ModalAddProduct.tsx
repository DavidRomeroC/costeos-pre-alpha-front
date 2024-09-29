"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Producto } from "@/types";

type PropsModalAddProduct = {
    id: number;
}


const ModalAddProduct = ({ id }: PropsModalAddProduct) => {

    const router = useRouter()

    const [modal, setModal] = useState<boolean>(false)

    const handleShowModal = () => {
        setModal(!modal)
    }

    const modelProduct = {
        uuid: 0,
        cantidad: 0,
        verdura: "",
        entero: "",
        promedio: 0,
        numxpieza: 0,
        tara: 0,
        codePlu: 0,
        pesada: 0,
        costo: 0,
        costocaja: 0
    }

    const [producto, setProducto] = useState<Producto>(modelProduct)

    const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        }
        )
    }

    const submitData = async () => {
        await fetch(`http://localhost:7000/sucursales/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
        });
        setModal(!modal)
        setProducto(modelProduct)
        router.refresh()
    }

    return (
        <div className="flex flex-col w-full items-center " >
            <div className="w-full flex flex-col items-center h-10 mb-6 " >
                {
                    modal ?
                        <button onClick={handleShowModal} className="bg-[#F16060] w-60 h-10 rounded-lg hover:border-2 hover:border-black"  >
                            CANCELAR
                        </button>
                        :
                        <button onClick={handleShowModal} className="bg-[#99C883] w-60 h-10 rounded-lg hover:border-2 hover:border-black"  >
                            AGREGAR PRODUCTO
                        </button>
                }
            </div>
            {
                modal ?
                    <div className="w-full"  >
                        <div className="w-full flex justify-between bg-[#99C883] h-14 mb-3 items-center rounded-md text-sm font-bold border-4 border-black" >
                            <div className=" flex flex-col items-center w-1/5" >
                                <input
                                    name="verdura"
                                    value={producto.verdura.toUpperCase()}
                                    onChange={handleSelectChange}
                                    type="string"
                                    style={{ width: "200px" }}
                                />
                            </div>
                            <div className="flex flex-col items-center w-1/5" >
                                <p> PLU </p>
                                <input
                                    name="codePlu"
                                    value={producto.codePlu}
                                    onChange={handleSelectChange}
                                    className="border-2 border-red-700"
                                    type="string"
                                    style={{ width: "50px" }}
                                />
                            </div>
                            <div className=" flex flex-col items-center w-1/5" >
                                <label>Fracción/entero: </label>
                                <select value={producto.entero} name="entero" onChange={handleSelectChange} >
                                    <option value="false" >Fracción</option>
                                    <option value="true" >Entero</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-center w-1/5" >
                                <p> Promedio por bulto/caja: </p>
                                <input
                                    name="promedio"
                                    value={producto.promedio}
                                    onChange={handleSelectChange}
                                    className="border-2 border-red-700"
                                    type="number"
                                    style={{ width: "50px" }}
                                />
                            </div>
                            <div className="flex flex-col items-center w-1/5" >
                                <p> Piezas por rollo: </p>
                                <input
                                    name="numxpieza"
                                    value={producto.numxpieza}
                                    onChange={handleSelectChange}
                                    className="border-2 border-red-700"
                                    type="number"
                                    style={{ width: "50px" }}
                                />
                            </div>
                            <div className="flex flex-col items-center w-1/5" >
                                <p> Tara: </p>
                                <input
                                    name="tara"
                                    value={producto.tara}
                                    onChange={handleSelectChange}
                                    className="border-2 border-red-700"
                                    type="number"
                                    style={{ width: "50px" }}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center mb-8 h-10 " >
                            <button onClick={submitData} className="bg-[#99C883] w-20 rounded-md hover:bg-[#8bf842] hover:border-2 hover:border-black " >
                                LISTO
                            </button>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default ModalAddProduct