export type Productos = {
    acelga: number;
    aguacate: number;
};

export type Sucursal = {
    name: string;
    productos: Productos;
};

export type DataCosteos = {
    uuid: number;
    fecha: string;
    costea: string;
    comprador: string;
    monto: number;
    sucursales: Sucursal[];
};

export type PropsListarCosteos = {
    costeos: DataCosteos[]
}