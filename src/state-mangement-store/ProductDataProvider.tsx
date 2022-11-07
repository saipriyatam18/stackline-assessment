import React, { useEffect } from 'react'
import { fetchData } from '../api/api';
import { ProductData } from '../models/SalesData';
import { ProductContext, ProductContextType } from './ProductContext';

const ProductDataProvider = (props: { children: any }) => {
  const [productData, setProductData] = React.useState<ProductData[]>()
  const [chosenProduct, setChosenProduct] = React.useState<ProductData>();

  useEffect(() => {
    fetchData().then(setProductData)
  }, []);

  useEffect(() => {
    productData && updateChosenProduct(productData[0].id)
  }, [productData]);

  // can be exposed and used to update from other places, if required.
  const updateChosenProduct = (id: string) => {
    setChosenProduct(productData?.find(product => product.id === id))
  }

  const value: ProductContextType = { chosenProduct }

  return <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
}

export default ProductDataProvider
