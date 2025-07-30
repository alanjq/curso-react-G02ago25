export function Saludo(props) {
    const texto = "Buenas noches"

    return <section>
        <p>{texto}</p>
        <p>Hola</p>
        <div>
            {props.children}
        </div>
    </section>
}
