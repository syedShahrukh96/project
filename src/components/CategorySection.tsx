import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MenuItem from './MenuItem';
import { MenuCategory } from '../types';

interface CategorySectionProps {
  category: MenuCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      <div 
        className="flex justify-between items-center bg-orange-100 p-4 rounded-lg cursor-pointer"
        onClick={toggleExpand}
      >
        <h2 className="text-xl font-bold text-orange-800">{category.name}</h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.items.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySection;