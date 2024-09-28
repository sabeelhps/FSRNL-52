import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Product from '../Product/Product';
import Container from '@mui/material/Container';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        // IIFE
        (async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(res.data);
                setPending(false);
            } catch (e) {
                const errorMsg = e.message || 'Something went wrong';
                setError(errorMsg);
                setPending(false);
            }
        })()
    }, []);

    if (pending) {
        return <p>Loading......</p>
    }

    if (!pending && error != null) {
        return <p>{ error }</p>
    }

    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    products.map((product) => {
                        return <Grid key={product.id}>
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
      </Container>
    )
}

export default ProductList;