import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    if (item.quantity < 2000) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 2000) {
      updateQuantity(item.id, value);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center mx-4">
        <button 
          onClick={handleDecrement}
          className="bg-gray-200 rounded-l p-1 hover:bg-gray-300 transition-colors"
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          min="1"
          max="2000"
          value={item.quantity}
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
      
      <div className="flex items-center">
        <span className="font-medium mr-4">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;