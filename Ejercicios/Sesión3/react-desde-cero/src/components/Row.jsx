import Stack from '@mui/material/Stack';

export default function Row({children}){
    return  <Stack spacing={2} direction="row">
        {children}
    </Stack>
}
