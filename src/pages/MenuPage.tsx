import React, { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';
import SearchBar from '../components/SearchBar';
import { MenuCategory } from '../types';

const MenuPage: React.FC = () => {
  const [categories, setCategories] = useState<MenuCategory[]>(menuData);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  useEffect(() => {
    let filteredCategories = [...menuData];

    // Apply search filter
    if (searchQuery) {
      filteredCategories = menuData.map(category => {
        const filteredItems = category.items.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, items: filteredItems };
      }).filter(category => category.items.length > 0);
    }

    // Apply price filter
    if (priceFilter !== 'all') {
      filteredCategories = filteredCategories.map(category => {
        let filteredItems = [...category.items];
        
        if (priceFilter === 'under10') {
          filteredItems = filteredItems.filter(item => item.price < 10);
        } else if (priceFilter === '10to15') {
          filteredItems = filteredItems.filter(item => item.price >= 10 && item.price <= 15);
        } else if (priceFilter === 'over15') {
          filteredItems = filteredItems.filter(item => item.price > 15);
        }
        
        return { ...category, items: filteredItems };
      }).filter(category => category.items.length > 0);
    }

    setCategories(filteredCategories);
  }, [searchQuery, priceFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handlePriceFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Menu</h1>
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
        
        <div className="flex justify-end mb-4">
          <div className="w-full md:w-48">
            <label htmlFor="price-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <select
              id="price-filter"
              value={priceFilter}
              onChange={handlePriceFilterChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Prices</option>
              <option value="under10">Under $10</option>
              <option value="10to15">$10 - $15</option>
              <option value="over15">Over $15</option>
            </select>
          </div>
        </div>
      </div>
      
      {categories.length > 0 ? (
        categories.map(category => (
          <CategorySection key={category.id} category={category} />
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No menu items found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setPriceFilter('all');
            }}
            className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;