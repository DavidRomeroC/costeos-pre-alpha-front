import FormularioCosteo from "@/components/viaje/FormularioCosteo"
import fetchSucursales from "@/helpers/sucursales/getDataSucursales"
import { DataSucursales } from "@/types"


const page = async () => {



    const dataSucursales: DataSucursales = await fetchSucursales()

    return (
        <div>
            <FormularioCosteo dataSucursales={dataSucursales} />
        </div>
    )
}

export default page