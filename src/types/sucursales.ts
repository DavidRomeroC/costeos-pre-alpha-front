export type Producto = {
    uuid: number;
    codePlu: number | string;
    verdura: string;
    cantidad: number;
    pesada: number;
    costo: number;
    costocaja: number;
    tara: number;
    numxpieza: number;
    promedio: number;
    entero: string;
};

export type DataSucursales = {
    id: number;
    name: string;
    productos: Producto[];
};

export type PropsEditarSucursal = {
    params: {
        id: number;
    }
}

export type PropsFormEditCatalogos = {
    catalogo: Producto;
}