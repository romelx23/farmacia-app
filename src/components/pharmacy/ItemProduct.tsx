import React, { FC } from "react";
export interface ItemProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
  };
}
export const ItemProduct: FC<ItemProductProps> = ({product}) => {
  return (
    <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-3 text-gray-100">
      <div className="bg-gray-700 rounded-lg shadow-lg p-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl font-mochi">{product.name}</h1>
          <h1>{product.price}</h1>
        </div>
        <p className="text-base">{product.description}</p>
        <img src={product.image} alt={product.name} className="w-full" />
      </div>
    </div>
  );
};
