"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ListarCosteos = ({ costeos }: any) => {

    const router = useRouter()

    useEffect(() => { router.refresh() }, [])


    return (
        <div className='w-4/5 h-10 border-2 self-center mt-10 ' >
            {
                costeos.map((costeo: any) => (
                    <Link href={`costeos/${costeo.uuid.toString()}`} key={costeo.uuid} className='flex items-center w-full justify-around bg-red-400 rounded-lg h-10 my-4 font-bold text-xl ' >
                        <h3 className='flex align-middle' > Fecha del viaje: {costeo.fecha} </h3>
                        <h3> Monto: ${costeo.monto} </h3>
                        <h2> Costea: {costeo.costea} </h2>
                        <h2> Comprador: {costeo.comprador} </h2>
                    </Link>
                ))
            }
        </div>
    )
}

export default ListarCosteos