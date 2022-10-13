const products = [
    {
        id: 1,
        nombre: 'Lapicero Pilot',
        precio: 5,
        stock: 10,
        categoria: 'oficina',
        foto:'https://images.utilex.pe/000979/450x450/lapicero-bps-azul-x-1-unidad-pilot-CYWTLUIE4HCHE.png'

    },
    {
        id: 2,
        nombre: 'Lapicero Faber Castell',
        precio: 1,
        stock: 10,
        categoria: 'oficina',
        foto:'https://images.utilex.pe/037210/450x450/lapicero-trilux-035-azul-x-1-unidad-faber-castell-CYXB6GBF4HWC6.png'

    },
    {
        id: 3,
        nombre: 'Silla Gamer',
        precio: 500,
        stock: 10,
        categoria: 'oficina',
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjyd88t3wrB-gPkmVwCdPaJtvdA18vP8om3McG9OlFWFo2ZzNhzrwPPYcNBgUJGh942A&usqp=CAU'

    },
    {
        id: 4,
        nombre: 'Escoba',
        precio: 8,
        stock: 10,
        categoria: 'limpieza',
        foto:'https://promart.vteximg.com.br/arquivos/ids/569873-1000-1000/106667.jpg?v=637401115008330000'

    },
    {
        id: 5,
        nombre: 'Recogedor',
        precio: 10,
        stock: 10,
        categoria: 'limpieza',
        foto:'https://promart.vteximg.com.br/arquivos/ids/569900-1000-1000/10721_1.jpg?v=637401115242570000'

    },
    {
        id: 6,
        nombre: 'Trapiador',
        precio: 15,
        stock: 10,
        categoria: 'limpieza',
        foto:'https://promart.vteximg.com.br/arquivos/ids/3099080-444-444/139954.jpg?v=637734576134030000'

    }
];

export const gFetch = () => {
    return new Promise((resolve, reject) => {

            resolve(products);
    });
}
