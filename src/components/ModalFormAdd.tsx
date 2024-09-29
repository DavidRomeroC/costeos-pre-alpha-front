"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

function ModalFormAdd() {

    const router = useRouter()

    const [modal, setModal] = useState<boolean>(true)
    const [data, setData] = useState({
        costea: "",
        comprador: "",
        fecha: ""
    })


    const showModal = () => {
        setModal(!modal)
        setData({
            costea: "",
            comprador: "",
            fecha: ""
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        router.push(`viaje?costea=${data.costea}&comprador=${data.comprador}&fecha=${data.fecha}`)

        setData({
            costea: "",
            comprador: "",
            fecha: ""
        })

    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target

        setData((prevData) => ({
            ...prevData, [id]: value
        })
        )

    }

    return (
        <>
            <button onClick={showModal} className="w-[268px] h-[100px] flex flex-row items-center bg-[#99C883] rounded-[20px] justify-evenly mx-[30vw] shadow-md shadow-black" >
                <p className="text-xl font-bold text-wrap " >AGREGAR COSTEO</p>
                <Image
                    src="/plus.png"
                    width={52}
                    height={49}
                    alt="agregar costeo"
                />
            </button>

            {
                modal ?
                    undefined
                    :
                    <div className="w-full h-full bg-[#8B8989] absolute inset-0 flex items-center justify-center " >
                        <div className="w-[1300px] h-[800px] bg-white flex items-center flex-col rounded-[20px] " >
                            <p className="text-3xl my-10 font-bold " >CREAR COSTEO DE VERDURA</p>
                            <form onSubmit={handleSubmit} className="my-16 w-5/12 flex items-center flex-col " >
                                <div className="flex items-start flex-col" >
                                    <label htmlFor="costea">COSTEA:</label>
                                    <input
                                        type="text"
                                        id="costea"
                                        value={data.costea}
                                        onChange={handleChange}
                                        required
                                        className="my-4 w-[391px] border-b-2 border-black focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex items-start flex-col my-10 " >
                                    <label htmlFor="comprador">COMPRADOR:</label>
                                    <input
                                        type="text"
                                        id="comprador"
                                        value={data.comprador}
                                        onChange={handleChange}
                                        required
                                        className="my-4 w-[391px] border-b-2 border-black focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex items-start flex-col my-7 " >
                                    <label htmlFor="fecha">FECHA DEL VIAJE: </label>
                                    <input
                                        type="date"
                                        id="fecha"
                                        value={data.fecha}
                                        onChange={handleChange}
                                        required
                                        className="w-[391px] border-b-2 border-black focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex justify-between w-full h-auto my-7 " >
                                    <button className=" bg-[#99C883] w-[209px] h-[67px] rounded-[20px] flex flex-row items-center justify-evenly " >
                                        <p className="text-xl font-bold " >SIGUIENTE</p>
                                        <Image
                                            src="/next-page.png"
                                            height={32}
                                            width={32}
                                            alt="nextpage" />
                                    </button>
                                    <button className=" bg-[#D66060] w-[209px] h-[67px] rounded-[20px] flex flex-row items-center justify-evenly"
                                        onClick={showModal}>
                                        <p className="text-xl font-bold " >CANCELAR</p>
                                        <Image
                                            src="/delete-back.png"
                                            height={32}
                                            width={32}
                                            alt="backpage" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            }

        </>
    )
}

export default ModalFormAdd