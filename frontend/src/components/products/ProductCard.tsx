import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Badge from '../ui/Badge';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { useProductStore } from '../../store/useProductStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { toggleFavorite } = useProductStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div className="group animate-fade-in">
      <Link
        to={`/products/${product.id}`}
        className="block h-full"
      >
        <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          {/* Product Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Organic Badge */}
            {product.isOrganic && (
              <div className="absolute top-2 left-2">
                <Badge variant="success" size="sm">Organic</Badge>
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <button
                className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                onClick={handleToggleFavorite}
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </button>

              <button
                className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Removed seller info and distance */}

            <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center text-amber-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                {product.reviews.length} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>

              <div className="text-sm text-gray-500">
                {product.stock > 10 ? (
                  <span className="text-green-600">In Stock</span>
                ) : product.stock > 0 ? (
                  <span className="text-amber-600">Low Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
