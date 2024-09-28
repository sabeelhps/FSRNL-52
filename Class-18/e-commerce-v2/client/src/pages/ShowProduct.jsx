import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Product from '../components/Product/Product';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useHttp from '../hooks/useHttp';
import { fetchProductById } from '../lib/apis';

const ShowProduct = () => {
    const { id } = useParams();
    const { sendRequest, data: product, error, status } = useHttp(fetchProductById, true);

    useEffect(() => {
        sendRequest(id);
    }, []);


    if (status == 'pending') {
        return <p>Loading.......</p>
    }

    if (status == 'completed' && error != null) {
        return <p>{ error }</p>
    }

    return (
        <Box>
            <Grid container spacing={2}>
                    <Grid size={6}>
                        <Product
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image} 
                        /> 
                </Grid>
                <Grid size={6}>
                            <Typography>Add a review</Typography>
                    </Grid>
            </Grid>
        </Box>
    )
}

export default ShowProduct