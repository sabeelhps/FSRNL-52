import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Product from '../components/Product/Product';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowProduct = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
   
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
    }, []);


    if (!product) {
        return <p>Loading.......</p>
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