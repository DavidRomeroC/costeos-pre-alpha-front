import FormularioCosteo from "@/components/viaje/FormularioCosteo"
import fetchSucursales from "@/helpers/sucursales/getDataSucursales"

const page = async () => {

    const dataSucursales: any = await fetchSucursales()

    return (
        <div>
            <FormularioCosteo dataSucursales={dataSucursales} />
        </div>
    )
}

export default page