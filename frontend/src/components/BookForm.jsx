import {TextField,Button,Box} from '@mui/material'

const BokkForm=({libro,onChange,onsubmit})=>(
    <Box component='form' sx={{mb:4,display:'flex',gap:2}}>
        <TextField label='Titulo' name='Titulo' value={libro.titulo} onchange={onChange} fullWidth></TextField>
        <TextField label='Autor' name='Autor' value={libro.autor} onchange={onChange} fullWidth></TextField>
        <TextField label='Año' name='Año' value={libro.anio} onchange={onChange} fullWidth></TextField>
        <Button variant='containd' color='primary' onClick={onSubmit}> </Button>
    </Box>
);
export default BokkForm;