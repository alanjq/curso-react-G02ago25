import Saludo from "./Saludo";

export default function ListaSaludos({lista}){
    if(!Array.isArray(lista) || lista.length == 0){
        return null
    }
    return <>
        {lista.map((nombre,indice)=><Saludo key={indice} name={nombre} />)}
    </>
}