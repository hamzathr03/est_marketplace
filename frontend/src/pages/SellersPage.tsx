import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Package } from 'lucide-react';
import { mockSellers } from '../data/mockData';

const SellersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Local Sellers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate producers and artisans who bring you fresh, quality products.
            Support local businesses and discover unique offerings from your region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSellers.map((seller) => (
            <Link 
              key={seller.id}
              to={`/sellers/${seller.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{seller.name}</h3>
                
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-amber-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-700">{seller.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{seller.followers} followers</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {seller.location}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Package className="h-4 w-4 mr-1" />
                  {seller.products.length} products
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2">{seller.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellersPage;