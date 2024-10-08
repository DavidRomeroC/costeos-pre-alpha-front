"use client"
import "./ModalAddProduct.css"
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
        <div className="contentModalAddProduct" >
            <div className=" buttonGroup" >
                {
                    modal ?
                        <button onClick={handleShowModal} className="buttonCancel"  >
                            CANCELAR
                        </button>
                        :
                        <button onClick={handleShowModal} className="buttonAdd"  >
                            AGREGAR PRODUCTO
                        </button>
                }
            </div>
            {
                modal ?
                    <div className="w-full"  >
                        <div className="contentInputs" >
                            <div className="contentInput" >
                                <input
                                    name="verdura"
                                    value={producto.verdura.toUpperCase()}
                                    onChange={handleSelectChange}
                                    type="string"
                                    style={{ width: "200px" }}
                                />
                            </div>
                            <div className="contentInput" >
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
                            <div className=" contentInput" >
                                <label>Fracción/entero: </label>
                                <select value={producto.entero} name="entero" onChange={handleSelectChange} >
                                    <option value="false" >Fracción</option>
                                    <option value="true" >Entero</option>
                                </select>
                            </div>
                            <div className="contentInput" >
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
                            <div className="contentInput" >
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
                            <div className="contentInput" >
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
                        <div className="contentButtonFetch" >
                            <button onClick={submitData} className="buttonFetch " >
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