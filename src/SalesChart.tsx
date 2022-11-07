import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useProductContext } from './state-mangement-store/ProductContext';

const SalesChart = () => {
    const [data, setData] = useState<{month: string, retailSales: number, wholesaleSales: number}[]>([]);
    const { chosenProduct } = useProductContext();

    useEffect(() => {
        const dataByMonth: Record<string, {retailSales: number, wholesaleSales: number}> = {}
        
        chosenProduct?.sales.forEach((salePoint) => {
            const month = `${salePoint.weekEnding.getMonth()+1}/${salePoint.weekEnding.getFullYear()}`
            if(!dataByMonth[month]) {
                dataByMonth[month] = {retailSales: salePoint.retailSales, wholesaleSales: salePoint.wholesaleSales}
            } else {
                dataByMonth[month] = {
                    retailSales: dataByMonth[month].retailSales + salePoint.retailSales,
                    wholesaleSales: dataByMonth[month].wholesaleSales + salePoint.wholesaleSales,
                }
            }
        });

        setData(Object.entries(dataByMonth).map(([month, sales]) => ({month, ...sales})));
    }, [chosenProduct])

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={900}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <Tooltip />
            <XAxis dataKey="month" />
            <Line type="monotone" dataKey="retailSales" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>

    )
}

export default SalesChart