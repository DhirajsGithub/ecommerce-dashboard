import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const products = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18'
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50'
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36'
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00'
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: 64,
    amount: '$1,965.81'
  }
];

export function TopSellingProducts() {
  return (
    <div className="bg-card rounded-lg p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">Top Selling Products</h3>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Price</TableHead>
              <TableHead className="text-muted-foreground">Quantity</TableHead>
              <TableHead className="text-muted-foreground text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index} className="border-0">
                <TableCell className="font-medium text-card-foreground">{product.name}</TableCell>
                <TableCell className="text-card-foreground">{product.price}</TableCell>
                <TableCell className="text-card-foreground">{product.quantity}</TableCell>
                <TableCell className="text-right font-medium text-card-foreground">{product.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}