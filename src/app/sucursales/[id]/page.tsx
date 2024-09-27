import { FormEditCatalogo } from "@/helpers/sucursales/FormEditCatalogo"
import fetchSucursales from "@/helpers/sucursales/getDataSucursales"
import ModalAddProduct from "@/helpers/sucursales/id/ModalAddProduct"
import Image from "next/image"
import Link from "next/link"


async function EditarSucursal({ params }: any) {

    const ide = params.id
    const sucursales: any = await fetchSucursales()
    const sucursalIndex = sucursales.findIndex((suc: any) => suc.id == ide)
    const { name, id, productos } = sucursales[sucursalIndex]

    return (
        <div className="w-full h-auto flex flex-col items-center " >
            <div className="w-2/4 flex items-center justify-evenly mt-10" >
                <Link href="/costeos" >
                    <Image src="/backarrow.png" height={50} width={50} alt="regresar al menu" />
                </Link>
                <p className="text-3xl font-bold" >EDITAR CATALOGO DE SUCURSAL</p>
            </div>
            <div className="w-4/5  flex flex-col items-center mt-14 " >
                <h2 className="text-3xl font-bold mb-14 " > {name} </h2>
                <ModalAddProduct id={id} />
                {
                    productos.map((catalogo: any) => (
                        <div key={catalogo.verdura} className="w-full flex justify-around bg-[#F16060] h-14 mb-3 items-center rounded-md text-sm font-bold "  >
                            <FormEditCatalogo catalogo={catalogo} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EditarSucursal