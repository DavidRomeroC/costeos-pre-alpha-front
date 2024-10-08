"use client"

import { Producto, PropsFormEditCatalogos } from "@/types"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import dotenv from "dotenv"

export const FormEditCatalogo = ({ catalogo }: PropsFormEditCatalogos) => {
    dotenv.config()
    const apiSucursales = process.env.NEXT_PUBLIC_API_BASE_URL

    const router = useRouter()
    const { id } = useParams()
    const [state, setState] = useState<Producto>(catalogo)

    const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        }
        )
    }

    const updateProduct = async () => {
        await fetch(`${apiSucursales}/sucursales/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });
        router.refresh()
    }

    const deleteProduct = async () => {
        await fetch(`${apiSucursales}/sucursales/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });
        router.refresh()
    }

    return (
        <>
            <button className="bg-[#55ADDE] h-8 w-24 ml-3 rounded-md" onClick={updateProduct} >
                ACTUALIZAR
            </button>
            <div className=" flex flex-col items-center w-1/5" >
                <input
                    name="verdura"
                    value={state.verdura.toUpperCase()}
                    onChange={handleSelectChange}
                    type="string"
                    style={{ width: "200px" }}
                />
            </div>
            <div className="flex flex-col items-center w-1/5" >
                <p> PLU </p>
                <input
                    name="codePlu"
                    value={state.codePlu}
                    onChange={handleSelectChange}
                    className="border-2 border-red-700"
                    type="string"
                    style={{ width: "50px" }}
                />
            </div>
            <div className=" flex flex-col items-center w-1/5" >
                <label>Fracción/entero: </label>
                <select value={state.entero} name="entero" onChange={handleSelectChange} >
                    <option value="false" >Fracción</option>
                    <option value="true" >Entero</option>
                </select>
            </div>
            <div className="flex flex-col items-center w-1/5" >
                <p> Promedio por bulto/caja: </p>
                <input
                    name="promedio"
                    value={state.promedio}
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
                    value={state.numxpieza}
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
                    value={state.tara}
                    onChange={handleSelectChange}
                    className="border-2 border-red-700"
                    type="number"
                    style={{ width: "50px" }}
                />
            </div>
            <button className="bg-black text-white h-8 w-24 mr-3 rounded-md" onClick={deleteProduct} >
                ELIMINAR
            </button>
        </>
    )
}
