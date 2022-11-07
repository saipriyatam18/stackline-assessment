import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useProductContext } from "./state-mangement-store/ProductContext";

const columnsConfig: GridColDef[] = [
    {
      field: 'weekEnding',
      headerName: 'Week Ending',
      width: 200,
      sortable: false,
      valueGetter: (params: GridValueGetterParams) => params.row.weekEnding.toDateString(),
    },
    {
      field: 'retailSales',
      headerName: 'Retail Sales',
      width: 150,
      type: 'number',
      sortable: true,
    },
    {
      field: 'wholesaleSales',
      headerName: 'Wholesale Sales',
      type: 'number',
      width: 110,
      sortable: true,
    },
    {
      field: 'unitsSold',
      headerName: 'Units Sold',
      sortable: true,
      type: 'number',
      width: 160,
    },
    {
        field: 'retailerMargin',
        headerName: 'Retailer Margin',
        sortable: true,
        type: 'number',
        width: 160,
      },
  ];

const SalesTable = (): React.ReactElement => {
    const { chosenProduct } = useProductContext();

    const rows = chosenProduct?.sales.map((dataItem, key) => ({id: key, ...dataItem}));

    return (
        <DataGrid
        rows={rows ?? []}
        columns={columnsConfig}
        // pageSize={10}
        // rowsPerPageOptions={[5]}
        checkboxSelection
    />
  )
}

export default SalesTable;