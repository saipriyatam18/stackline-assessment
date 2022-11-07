import { ProductData, RawSalesResponse } from '../models/SalesData';
import data from './data/assessment_data_2021.json';

export const fetchData = (): Promise<ProductData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(parseData(data)), 1000)
    });
}

const parseData = (data: RawSalesResponse[]): ProductData[] => {
    return data.map(item => (
        {
            ...item,
            sales: item.sales.map(sale => ({...sale, weekEnding: new Date(sale.weekEnding)}))
        }
    ))
}
