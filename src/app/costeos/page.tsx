import ListarCosteos from "@/components/costeos/ListarCosteos";
import ShowAddCosteo from "@/components/ShowAddCosteo";
import getDataCosteos from "@/helpers/costeos/getDataCosteos"
import { DataCosteos } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Costeospage() {

    const costeos: DataCosteos[] = await getDataCosteos()

    return (
        <div className="w-full border-[5px] flex justify-center flex-col h-auto " >
            <div className="flex flex-row w-11/12 items-center justify-start self-center my-7" >
                <Link href="/" >
                    <Image
                        src="/backarrow.png"
                        height={69}
                        width={80}
                        alt="backpage"
                    />
                </Link>
                <ShowAddCosteo />
            </div>
            <div className="flex flex-row w-11/12 items-center justify-between h-auto self-center my-7" >
                <div className="w-[193px] h-[63px] bg-[#55ADDE] rounded-[10px] flex flex-row items-center justify-evenly shadow-md shadow-black" >
                    <Image
                        src="/CALENDAR.png"
                        width={31}
                        height={31}
                        alt="agregar costeo"
                    />
                    <p className="text-sm font-bold text-wrap" >BUSCAR POR FECHA</p>
                </div>
                <Link href="/sucursales" className="w-[193px] h-[63px] bg-[#55ADDE] rounded-[10px] flex flex-row items-center justify-evenly shadow-md shadow-black">
                    <Image
                        src="/mall.png"
                        width={31}
                        height={31}
                        alt="agregar costeo"
                    />
                    <p className="text-sm font-bold text-wrap" >SUCURSALES</p>
                </Link>
                <Link href="/edicion-catalogo" className="w-[193px] h-[63px] bg-[#55ADDE] rounded-[10px] flex flex-row items-center justify-evenly shadow-md shadow-black " >
                    <Image
                        src="/pencil.png"
                        width={31}
                        height={31}
                        alt="agregar costeo"
                    />
                    <p className="text-sm font-bold text-wrap" >EDITAR CATÁLOGO</p>
                </Link>
            </div>
            <ListarCosteos costeos={costeos} />
        </div>
    )
}

