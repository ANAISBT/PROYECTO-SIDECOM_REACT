const products = [
    {
        id: '1',
        nombre: 'Plumon N°45 X 20 Faber-Castell',
        precio: 1.40,
        stock: 10,
        categoria: 'oficina',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/p/l/plumon-fab-45-x-20-555324-350-default-1.jpg'

    },
    {
        id: '2',
        nombre: 'File Manilla A4 Grafipapel',
        precio: 10.20,
        stock: 10,
        categoria: 'oficina',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/f/i/file-manila-a4-grafip-916-default-1.jpg'

    },
    {
        id: '3',
        nombre: 'Tijera 7 1/2 Pulgadas WEX',
        precio: 11.60,
        stock: 10,
        categoria: 'oficina',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/t/i/tijera-7-12-pulgadas-1869-default-1.jpg'

    },
    {
        id: '4',
        nombre: 'Robot LimpiaCristales Windroid 980',
        precio: 2499,
        stock: 15,
        categoria: 'limpieza',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/r/o/robot-limipacristales-windroid-980-connected-48291-default-1.jpg'

    },
    {
        id: '5',
        nombre: 'Alcohol en Gel x 1 Gln Nex',
        precio: 66,
        stock: 20,
        categoria: 'limpieza',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/a/l/alcohol-en-gel-x-1-gln-nex-46786-default-1.jpg'

    },
    {
        id: '6',
        nombre: 'Limpiatodo Violeta x 1 Gln Daryza',
        precio: 17.90,
        stock: 5,
        categoria: 'limpieza',
        foto:'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/l/i/limpiatodo-violeta-x-1gln-daryza-31988-default-1.png'

    }
];

export const gFetch = () => {
    return new Promise((resolve, reject) => {

            resolve(products);
    });
}
