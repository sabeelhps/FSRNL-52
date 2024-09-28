import React, { Fragment } from 'react'
import ProductList from '../components/ProductList/ProductList'
import Banner from '../components/Banner/Banner';

const AllProducts = () => {
  return (
    <Fragment>
          <Banner/>
          <ProductList/>
    </Fragment>
  )
}

export default AllProducts;