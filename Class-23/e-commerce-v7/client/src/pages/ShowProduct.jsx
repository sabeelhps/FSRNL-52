import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Product from '../components/Product/Product';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { fetchProductById } from '../lib/apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ShowProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { sendRequest, data: product, error, status } = useHttp(fetchProductById, true);

    useEffect(() => {
        sendRequest(id);
    }, []);


    if (status == 'pending') {
        return <p>Loading.......</p>
    }

    if (status == 'completed' && error != null) {
        if (error.status == 401) {
            toast.error(error?.response?.data?.message);
            navigate('/login');
        }
        return <p>{error?.response?.data?.message}</p>
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