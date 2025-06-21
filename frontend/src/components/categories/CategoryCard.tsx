import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon from lucide-react
  const IconComponent = (LucideIcons as any)[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];
  
  return (
    <Link 
      to={`/categories/${category.id}`}
      className="block animate-fade-in"
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-6 h-full flex flex-col items-center text-center">
        <div className="bg-primary-100 p-4 rounded-full mb-4">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary-600" />}
        </div>
        
        <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;