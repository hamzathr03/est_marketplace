import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;
  
  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.stock) return;
    
    updateQuantity(product.id, newQuantity);
  };
  
  const handleRemove = () => {
    removeItem(product.id);
  };
  
  return (
    <div className="flex py-4 border-b border-gray-200 last:border-0 animate-fade-in">
      {/* Product Image */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.seller.name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              className="p-1 text-gray-500 hover:text-gray-700"
              onClick={() => handleUpdateQuantity(quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="px-2 py-1 text-sm text-gray-700 min-w-[2rem] text-center">
              {quantity}
            </span>
            
            <button
              className="p-1 text-gray-500 hover:text-gray-700"
              onClick={() => handleUpdateQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {/* Remove Button */}
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleRemove}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;