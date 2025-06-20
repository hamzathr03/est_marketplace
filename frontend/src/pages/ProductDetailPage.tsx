import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  MapPin,
  Truck,
  Leaf,
  Clock
} from 'lucide-react';

import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useProductStore } from '../store/useProductStore';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchProductById, isLoading } = useProductStore();
  const { addItem } = useCartStore();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        const fetchedProduct = await fetchProductById(id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setSelectedImage(fetchedProduct.images[0]);
        }
      }
    };

    loadProduct();
  }, [fetchProductById, id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && product && value <= product.stock) {
      setQuantity(value);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-20 w-20 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="md:w-1/2">
              <div className="mb-4 rounded-lg overflow-hidden h-96 bg-gray-100">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`h-20 w-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === image ? 'border-primary-500' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2">
              <div className="flex flex-col h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {product.isOrganic && (
                      <Badge variant="success\" size="sm">Organic</Badge>
                    )}
                    {product.isLocal && (
                      <Badge variant="primary" size="sm">Local</Badge>
                    )}
                  </div>

                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-amber-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-sm text-gray-500">
                      {product.reviews.length} reviews
                    </span>
                    <span className="mx-2 text-gray-300">|</span>
                    <Link
                      to={`/sellers/${product.seller.id}`}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      {product.seller.name}
                    </Link>
                  </div>

                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    ${product.price.toFixed(2)}
                  </div>

                  <div className="text-gray-700 mb-6">
                    <p>{product.description}</p>
                  </div>

                  {/* Product Meta */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span>
                        {product.location} ({product.distance} km away)
                      </span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Leaf className="h-5 w-5 text-gray-400 mr-2" />
                      <span>
                        {product.isOrganic ? 'Organically grown' : 'Conventionally grown'}
                      </span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Truck className="h-5 w-5 text-gray-400 mr-2" />
                      <span>
                        Free delivery on orders over $35
                      </span>
                    </div>

                    <div className="flex items-center text-sm">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span>
                        Usually ships within 1-2 business days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        max={product.stock}
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        {product.stock > 10 ? (
                          <span className="text-green-600">In Stock</span>
                        ) : product.stock > 0 ? (
                          <span className="text-amber-600">Only {product.stock} left</span>
                        ) : (
                          <span className="text-red-600">Out of Stock</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      fullWidth
                      icon={<ShoppingCart />}
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      icon={<Heart />}
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>

  );
};

export default ProductDetailPage;
