import { useState } from "react";
import TextInput from "../nativos/TextInput";
import Button from "./Button";
import Row from "./Row";

export default function FormName({ onAddName }) {
    const [inputValue, setInputValue] = useState("")

    const handleButtonClick = ()=> {
        if(onAddName){
            onAddName(inputValue)
        }
    }

    return (<>
        <Row>
            <TextInput label="Ingresa un nombre" onInput={setInputValue} />
        </Row>
        <Row>
            <Button text="Agregar" onClick={handleButtonClick} />
        </Row>
    </>)
}
