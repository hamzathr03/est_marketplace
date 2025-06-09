import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import CartItem from './CartItem';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { items, isOpen, toggleCart, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const total = getTotal();
  
  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleCart}
      ></div>
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="px-4 py-6 sm:px-6 bg-primary-50">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Your Cart
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={toggleCart}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            {/* Body */}
            <div className="flex-1 py-6 px-4 sm:px-6 overflow-auto">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Add some products to your cart to see them here.
                  </p>
                </div>
              ) : (
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.product.id} className="py-2">
                        <CartItem item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={toggleCart}
                  >
                    Continue Shopping
                  </Button>
                  <button
                    className="text-sm text-red-600 hover:text-red-800 flex items-center justify-center mt-2"
                    onClick={clearCart}
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;