import{Grid,Card,CardContent,Typography,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BookList = ({libros, onDelete}) => {
    <Grid container spacing={2}>
        {libros.map((libro) => (
            <Grid item xs={12} sm={6} md={4} key={libro.id}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h6'>{libro.Titulo}</Typography>
                    <Typography variant='body2' color='text.secondary'>{libro.Autor}({libro.Anio})</Typography>
                    <IconButton color='error' onClick={() => onDelete(libro)}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
            </Grid>
        ))}
    </Grid>
}

export default BookList;