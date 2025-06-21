import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/products/ProductGrid';
import { mockSellers } from '../data/mockData';
import { Seller } from '../types';

const SellerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [seller, setSeller] = useState<Seller | null>(null);

  useEffect(() => {
    const foundSeller = mockSellers.find(s => s.id === id);
    setSeller(foundSeller || null);
  }, [id]);

  if (!seller) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Seller Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Seller Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="h-48 md:h-64 relative">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {seller.name}
                </h1>
                
                <div className="flex items-center flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-400 fill-current" />
                    <span className="ml-1 font-medium">{seller.rating}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-1" />
                    {seller.location}
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-1" />
                    Joined {new Date(seller.createdAt).toLocaleDateString()}
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-1" />
                    {seller.followers} followers
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button>Follow</Button>
                <Button variant="outline">Contact</Button>
              </div>
            </div>
            
            <p className="text-gray-600">{seller.description}</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products by {seller.name}</h2>
          <ProductGrid products={seller.products} />
        </div>
      </div>
    </div>
  );
};

export default SellerDetailPage;