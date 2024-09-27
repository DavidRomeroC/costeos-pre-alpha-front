async function fetchSucursales() {
    const res = await fetch("http://localhost:7000/sucursales", { cache: "no-store" })
    const data = await res.json()
    return data
}

export default fetchSucursales 