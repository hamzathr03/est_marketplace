import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, MapPin, ShoppingBag, Truck } from 'lucide-react';

import Button from '../components/ui/Button';
import ProductGrid from '../components/products/ProductGrid';
import { useProductStore } from '../store/useProductStore';

const HomePage: React.FC = () => {
  const { products, fetchProducts, isLoading } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
              Fresh Local Products Directly From Producers
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-slide-up">
              Discover quality products from local farmers and artisans. Support your community and enjoy fresh, sustainable goods.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up">
              <Button 
                size="lg"
                icon={<ShoppingBag />}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                icon={<MapPin />}
              >
                Find Local Sellers
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="hidden md:block absolute bottom-0 right-0 w-1/3 h-3/4 opacity-10">
          <Leaf className="w-full h-full text-primary-800" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Producers</h3>
              <p className="text-gray-600">
                Support local businesses and reduce your environmental footprint by buying directly from nearby producers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Organic & Fresh</h3>
              <p className="text-gray-600">
                Enjoy organic, freshly harvested products that are better for you and the environment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered quickly to your doorstep, often within 24 hours of ordering.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} loading={isLoading} />
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why customers love shopping on LocalMarket for their fresh, local produce needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The fresh vegetables from LocalMarket are incredible! I can taste the difference compared to supermarket produce, and I love knowing exactly where my food comes from."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sophie Martin</h4>
                  <p className="text-sm text-gray-500">Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I've been buying cheese from Fromagerie Artisanale for months now. Their selection is outstanding, and the quality is consistently excellent. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Pierre Dupont</h4>
                  <p className="text-sm text-gray-500">Lyon, France</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The wildflower honey I purchased was divine! Delivery was prompt, and the seller even included a handwritten note. This kind of personal touch is why I love LocalMarket."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Marie Lefèvre</h4>
                  <p className="text-sm text-gray-500">Bordeaux, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to taste the difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers supporting local producers and enjoying fresh, quality products.
          </p>
          <Link to="/products">
            <Button 
              variant="secondary" 
              size="lg"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;