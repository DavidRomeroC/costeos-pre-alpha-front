import dotenv from "dotenv"

async function fetchSucursales() {
    dotenv.config()
    const apiCosteos = process.env.NEXT_PUBLIC_API_BASE_URL
    const res = await fetch(`${apiCosteos}/costeos`, { cache: "no-store" })
    const data = await res.json()
    return data
}

export default fetchSucursales 