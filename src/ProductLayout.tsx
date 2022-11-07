import { Box, CircularProgress, Grid, Card } from '@mui/material';
import ProductSummary from './ProductSummary';
import ProductLabels from './ProductLabels';
import React from 'react';
import SalesTable from './SalesTable';
import SalesChart from './SalesChart';
import { useProductContext } from './state-mangement-store/ProductContext';

const ProductLayout = (): React.ReactElement => {
    const { chosenProduct } = useProductContext();

    if(!chosenProduct) return <CircularProgress /> 
    return (
        <Box sx={{margin: 8}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card style={{height: "100vh"}}>
                        <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={10}>
                            <ProductSummary />
                        </Grid>
                        <Grid item xs={10}>
                            <ProductLabels />
                        </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card style={{height: "55vh"}}>
                        <SalesChart />
                    </Card>
                    <Card style={{height: "45vh"}}>
                        <SalesTable />
                    </Card>
                </Grid>  
            </Grid>
        </Box>
    )
}

export default ProductLayout;