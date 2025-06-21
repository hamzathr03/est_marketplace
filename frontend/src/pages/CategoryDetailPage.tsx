import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import ProductGrid from '../components/products/ProductGrid';
import { Category } from '../types';

const CategoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, categories, fetchProducts, fetchCategories, isLoading } = useProductStore();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    if (id && categories.length > 0) {
      const foundCategory = categories.find(c => c.id === id);
      setCategory(foundCategory || null);
    }
  }, [id, categories]);

  const categoryProducts = products.filter(product => product.category === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Category Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-6 rounded-full">
              {category.icon && (
                <span className="text-4xl text-primary-600">{category.icon}</span>
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        </div>

        <ProductGrid 
          products={categoryProducts} 
          loading={isLoading}
          emptyMessage="No products found in this category."
        />
      </div>
    </div>
  );
};

export default CategoryDetailPage;