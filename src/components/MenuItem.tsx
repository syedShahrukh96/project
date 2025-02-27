import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (quantity < 2000) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 2000) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity
      });
      setQuantity(0);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span className="text-orange-600 font-bold">${item.price.toFixed(2)}</span>
      </div>
      <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={handleDecrement}
            className="bg-gray-200 rounded-l p-1 hover:bg-gray-300 transition-colors"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            min="0"
            max="2000"
            value={quantity}
            onChange={handleInputChange}
            className="w-12 text-center border-t border-b border-gray-200 py-1 focus:outline-none"
          />
          <button 
            onClick={handleIncrement}
            className="bg-gray-200 rounded-r p-1 hover:bg-gray-300 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          className={`px-3 py-1 rounded text-white ${
            quantity > 0 
              ? 'bg-orange-600 hover:bg-orange-700' 
              : 'bg-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;