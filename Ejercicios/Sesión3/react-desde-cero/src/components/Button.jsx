import Button from '@mui/material/Button';

export default function Button({text, onClick}) {
    return <Button variant="outlined" onClick={onClick}>{text}</Button>
}
