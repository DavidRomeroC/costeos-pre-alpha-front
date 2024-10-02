export type Producto = {
    uuid: number;
    codePlu: string | number;
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

export type Sucursal = {
    name: string;
    productos: Producto[];
};

export type DataCosteos = {
    uuid: number;
    fecha: string;
    costea: string;
    comprador: string;
    monto: number;
    sucursales: Sucursal[];
};

export type TCosteoState = {
    costea: string | null;
    comprador: string | null;
    fecha: string | null;
    newCosteo: Sucursal[] | []
}


export type PropsListarCosteos = {
    costeos: DataCosteos[]
}