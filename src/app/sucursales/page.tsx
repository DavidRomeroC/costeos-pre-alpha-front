import fetchSucursales from "@/helpers/sucursales/getDataSucursales"
import { DataSucursales } from "@/types"
import Image from "next/image"
import Link from "next/link"

async function Sucursales() {

    const sucursales: DataSucursales[] = await fetchSucursales()

    return (
        <div className="w-full h-auto flex justify-center flex-col items-center " >
            <div className="w-3/4 h-20 mt-10 flex justify-between items-center " >
                <Link href="/costeos" >
                    <Image src="/backarrow.png" height={50} width={50} alt="regresar al menu" />
                </Link>
                <button className="w-60 h-16 bg-[#99C883] flex justify-evenly items-center rounded-2xl shadow-black shadow-lg " >
                    <Image src="/plus.png" width={50} height={50} alt="agregar-sucursal" />
                    <p className="font-bold" >AGREGAR SUCURSAL</p>
                </button>
                <div>
                </div>
            </div >
            <div className=" w-3/4 mt-16 flex flex-col items-center " >
                <h1 className="text-5xl font-extrabold mb-10" >SUCURSALES</h1>
                {
                    sucursales.map(({ id, name, productos }) => (
                        <div key={id} className="w-1/2 h-16 bg-[#F18360] my-3 rounded-2xl flex items-center justify-evenly " >
                            <p className="text-3xl font-bold  " > {name.toUpperCase()} </p>
                            <Link href={`/sucursales/${id}`} >
                                <Image src="/PENCIL.png" width={40} height={40} alt="editar-catalogo" />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sucursales