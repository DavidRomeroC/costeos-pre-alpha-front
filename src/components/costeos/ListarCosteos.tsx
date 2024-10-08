"use client"
import "./ListarCosteos.css"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DataCosteos, PropsListarCosteos } from '@/types'

const ListarCosteos = ({ costeos }: PropsListarCosteos) => {

    const router = useRouter()

    useEffect(() => { router.refresh() }, [])

    return (
        <div className='contentListaCosteos' >
            {
                costeos.map((costeo: DataCosteos) => (
                    <Link href={`costeos/${costeo.uuid}`} key={costeo.uuid} className='anchorItemGroup' >
                        <h3 className='h3Date' > Fecha del viaje: {costeo.fecha} </h3>
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