import { Grid, Typography } from '@mui/material';
import { useProductContext } from './state-mangement-store/ProductContext';

const ProductSummary = () => {
    const { chosenProduct } = useProductContext();

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <img src={chosenProduct?.image} style={{height: '100px', width: '100px'}} />
                <Typography variant='body1' style={{fontWeight: 'bold'}} gutterBottom>{chosenProduct?.title}</Typography>
                <Typography variant='body2' gutterBottom color="#aa9f9f">
                    {chosenProduct?.subtitle}
                </Typography>
            </Grid>
        </Grid>    
    )
}

export default ProductSummary