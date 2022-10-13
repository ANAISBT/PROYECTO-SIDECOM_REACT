const products = [
    {
        id: 1,
        nombre: 'Product 1',
        precio: 100,
        stock: 10,
        categoria: 'oficina',
        foto:'https://images.utilex.pe/000979/450x450/lapicero-bps-azul-x-1-unidad-pilot-CYWTLUIE4HCHE.png'

    },
    {
        id: 2,
        nombre: 'Product 2',
        precio: 100,
        stock: 10,
        categoria: 'limpieza',
        foto:'https://images.utilex.pe/037210/450x450/lapicero-trilux-035-azul-x-1-unidad-faber-castell-CYXB6GBF4HWC6.png'

    }
];

export const gFetch = () => {
    return new Promise((resolve, reject) => {

            resolve(products);
    });
}
