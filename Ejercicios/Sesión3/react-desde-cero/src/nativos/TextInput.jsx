import TextField from "@mui/material/TextField"

export default function TextInput({label, onInput}){
    const handleInput = (event) => {
        if(onInput){
            onInput(event.target.value)
        }
    }
    return <TextField label={label} variant="outlined" onInput={handleInput} />
}
