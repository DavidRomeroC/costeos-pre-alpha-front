"use client"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const FormularioCosteo = ({ dataSucursales }: any) => {

    const router = useRouter()

    const serachParams = useSearchParams()
    const queryCostea = serachParams.get("costea")
    const queryComprador = serachParams.get("comprador")
    const queryFecha = serachParams.get("fecha")

    const [costeo, setCosteo] = useState<any>({
        costea: queryCostea,
        comprador: queryComprador,
        fecha: queryFecha,
        newCosteo: [],
    })

    useEffect(() => {
        setCosteo({
            ...costeo,
            newCosteo: dataSucursales
        })
    }, [])

    const [select, setSelect] = useState<number>(0)

    const arrayControl: any = []
    for (let index = 0; index < dataSucursales.length; index++) {
        arrayControl.push(index)
    }

    const handleSelect = (e: any) => {
        setSelect(e.target.name)
    }

    const { costea, comprador, fecha, newCosteo } = costeo

    const handleChangeValues = (e: any) => {
        const value = e.target.value
        const name = e.target.name
        const uuid = e.target.id
        const index = newCosteo[select].productos.findIndex((p: any) => p.uuid == uuid)

        setCosteo((prevCosteo: any) => {
            const updatedCosteo = { ...prevCosteo };
            const updatedProductos = [...updatedCosteo.newCosteo[select].productos];

            updatedProductos[index] = {
                ...updatedProductos[index],
                [name]: value,
            };

            updatedCosteo.newCosteo[select].productos = updatedProductos;
            return updatedCosteo;
        });
    }

    const sendData = async () => {
        await fetch(`http://localhost:7000/costeos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(costeo),
        });
        router.push("/costeos")
    }

    return (
        <>
            {
                newCosteo.length === 0 ?
                    <div>loading</div>
                    :
                    <div className="w-ful flex items-center flex-col align-middle mt-12" >
                        <div className="w-4/5 flex justify-evenly items-center " >
                            <Link href="/costeos" >
                                <Image
                                    src="/backarrow.png"
                                    height={50}
                                    width={50}
                                    alt="backpage"
                                />
                            </Link>
                            <h1 className="font-extrabold text-3xl " > COSTEA: {costea.toUpperCase()} COMPRADOR: {comprador.toUpperCase()} FECHA: {fecha} </h1>
                        </div>
                        <div className="w-4/5 h-auto flex flex-col items-center mt-11" >
                            <div className="w-full flex flex-col items-center " >
                                <p className="font-bold text-xl mb-6" >SELECCIONE SUCURSAL</p>
                                <div className=" flex w-1/3 justify-evenly" >
                                    {
                                        arrayControl.map((control: any) => (
                                            <button key={control} onClick={handleSelect} name={control} className="bg-[#006FB9] w-32 h-8 text-white rounded-md " >
                                                {dataSucursales[control].name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="mt-6" >
                                <p>SUCURSAL SELECCIONADA: {newCosteo[select].name.toUpperCase()}</p>
                            </div>
                            <div className="w-full flex flex-col items-center " >
                                {
                                    newCosteo[select].productos.map((p: any) => (
                                        <div key={p.uuid} className="mt-6 flex w-11/12 " >
                                            <h1 className="w-1/5 flex" >
                                                PRODUCTO: {p.verdura.toUpperCase()}
                                            </h1>
                                            <div className="w-1/5 flex " >
                                                <h3> CAJA O ROLLO: </h3>
                                                <input type="number" value={p.cantidad} onChange={handleChangeValues} name="cantidad" id={p.uuid} />
                                            </div>
                                            <div className="w-1/5 flex " >
                                                <h3> KG O PZ: </h3>
                                                <input type="number" value={p.pesada} onChange={handleChangeValues} name="pesada" id={p.uuid} />
                                            </div>
                                            <div className="w-1/5 flex ">
                                                <h3> COSTO: </h3>
                                                <input type="number" value={p.costocaja} onChange={handleChangeValues} name="costocaja" id={p.uuid} />
                                            </div>
                                            <div className="w-1/5 flex " >
                                                <h3>COSTO PZ/KG: {p.costo} </h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <button className="w-44 h-14 mt-7 bg-[#99C883] rounded-xl text-xl font-bold" onClick={sendData} >ENVIAR DATOS</button>
                    </div>
            }
        </>
    )
}

export default FormularioCosteo