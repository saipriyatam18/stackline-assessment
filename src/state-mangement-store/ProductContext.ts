import React from 'react'
import { ProductData } from '../models/SalesData'

export interface ProductContextType {
    chosenProduct?: ProductData
}

const defaultData: ProductContextType = {
    chosenProduct: undefined,
}

export const ProductContext: React.Context<ProductContextType> = React.createContext(defaultData)
export const useProductContext = (): ProductContextType => React.useContext(ProductContext)