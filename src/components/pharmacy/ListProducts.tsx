import React from 'react'
import { ItemProduct } from './ItemProduct';

export const ListProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10',
            description: 'Description 1',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$20',
            description: 'Description 2',
            image: 'https://via.placeholder.com/150'
        }
    ]
  return (
    <div className='flex flex-wrap gap-4'>
        {products.map(product => (
            <ItemProduct product={product}/>
        ))}
    </div>
  )
}
