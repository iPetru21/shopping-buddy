import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Product Data
function createData(id, productName, quantity, category, price, purchaseBy) {
  return { id, productName, quantity, category, price, purchaseBy };
}

const rows = [
  createData(0, 'Milk', 2, 'Dairy', 5.99, '20 Aug, 2024'),
  createData(1, 'Bread', 1, 'Bakery', 2.99, '20 Aug, 2024'),
  createData(2, 'Eggs', 12, 'Dairy', 3.49, '20 Aug, 2024'),
  createData(3, 'Chicken Breast', 4, 'Meat', 12.99, '21 Aug, 2024'),
  createData(4, 'Apples', 6, 'Fruits', 4.99, '21 Aug, 2024'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ShoppingList() {
  return (
    <React.Fragment>
      <Title>Shopping Products List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Purchase By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{`$${row.price}`}</TableCell>
              <TableCell align="right">{row.purchaseBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more products
      </Link>
    </React.Fragment>
  );
}
