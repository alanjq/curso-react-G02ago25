export const ListItem = ({href, label}) => {
    // useMemo - tipo caché para componentes
    const handleClick = ()=>{
        alert("Hiciste clic y estamos en esta ruta", location.href)
    }

    return <li><a onClick={handleClick} href={href} className="nav-link px-2 text-secondary">
        {label}
        </a></li>
}

export default ListItem
