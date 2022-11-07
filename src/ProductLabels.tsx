import { Grid, Chip } from '@mui/material';
import { useProductContext } from './state-mangement-store/ProductContext';

const ProductLabels = () => {
    const { chosenProduct } = useProductContext();

    return (
        <Grid container spacing={1} justifyContent="center">
            {chosenProduct?.tags.map((tag, key) => (
                <Grid item key={key}>
                    <Chip label={tag} /> 
                </Grid>))
            }
        </Grid>  
    )
}

export default ProductLabels;