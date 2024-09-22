import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Product from '../Product/Product';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
    }, []);


    return (
        <Box>
            <Grid container spacing={2}>
                {
                    products.map((product) => {
                        return <Grid size={4} key={product.id}>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                    </Grid>
                    })
                }
            </Grid>
      </Box>
    )
}

export default ProductList;