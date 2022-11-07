export interface RawSalesResponse {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: {
        customer: string,
        review: string,
        score: number
    }[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: {
        weekEnding: string,
        retailSales: number,
        wholesaleSales: number,
        unitsSold: number,
        retailerMargin: number
    }[],
}

export interface SalesData {
    weekEnding: Date,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface ProductData extends Omit<RawSalesResponse, 'sales'> {
    sales: SalesData[],    
};
