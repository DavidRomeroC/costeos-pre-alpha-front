import dotenv from "dotenv"

async function fetchSucursales() {
    dotenv.config()
    const apiSucursales = process.env.NEXT_PUBLIC_API_BASE_URL
    const res = await fetch(`${apiSucursales}/sucursales`, { cache: "no-store" })
    const data = await res.json()
    return data
}

export default fetchSucursales 