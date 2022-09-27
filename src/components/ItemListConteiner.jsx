const NameComponent = (props) => {
    const {name} = props;
    return <>
    <h2>Bienvenido</h2>
        <h4>{name}</h4>
    </>
};

export const ItemListConteiner = (props) => {
    const {nombre} = props;
    const nombreTxt = `${nombre}`;

    return <section>
        <NameComponent name={nombreTxt}/>
    </section>
};