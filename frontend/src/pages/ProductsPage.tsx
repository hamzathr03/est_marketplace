import React, { useEffect, useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { useProductStore } from '../store/useProductStore';
import Badge from '../components/ui/Badge';

const ProductsPage: React.FC = () => {
  const { 
    filteredProducts, 
    categories, 
    selectedCategory,
    searchQuery,
    isLoading,
    fetchProducts, 
    fetchCategories,
    setSearchQuery,
    setSelectedCategory
  } = useProductStore();
  
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">
            Discover fresh, local products from our sellers
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            {/* Filter Toggle (Mobile) */}
            <button
              className="md:hidden flex items-center space-x-2 text-gray-700 hover:text-primary-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            
            {/* Active Filters */}
            {(selectedCategory || searchQuery) && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Active filters:</span>
                
                {selectedCategory && (
                  <Badge 
                    variant="primary"
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(null)}
                  >
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <span className="ml-1">×</span>
                  </Badge>
                )}
                
                {searchQuery && (
                  <Badge 
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  >
                    "{searchQuery}"
                    <span className="ml-1">×</span>
                  </Badge>
                )}
                
                <button
                  className="text-xs text-red-600 hover:text-red-800"
                  onClick={handleClearFilters}
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
          
          {/* Filters (Mobile) */}
          {showFilters && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-sm text-gray-700 cursor-pointer"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
              
              {(selectedCategory || searchQuery) && (
                <button
                  className="mt-4 text-sm text-primary-600 hover:text-primary-700"
                  onClick={handleClearFilters}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid 
              products={filteredProducts} 
              loading={isLoading}
              emptyMessage="No products found matching your filters. Try adjusting your search or filters."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;