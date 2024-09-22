import React from 'react';
import img1 from '../assets/image 7.png'; 
import img2 from '../assets/image 8.png';
import img3 from '../assets/image 9.png';
import img4 from '../assets/image 10.png';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; 

const products = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: 120,
      oldPrice: null,
      rating: 4.5,
      imageUrl: img1,
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      oldPrice: 260,
      rating: 3.5, 
      discount: '-10%',
      imageUrl: img2, 
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      oldPrice: null,
      rating: 4.5, 
      imageUrl: img3,
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      oldPrice: 160,
      rating: 4.5, 
      discount: '-30%',
      imageUrl: img4,
    },
  ];
  
  
  const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
  
    return (
      <div className="flex items-center">
       
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
      
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
        
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar key={index} className="text-yellow-400" />
          ))}
   
        <span className="ml-2 text-gray-600 text-sm">({rating}/5)</span>
      </div>
    );
  };
  
  const Product = () => {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center mb-6">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className=" p-4 rounded-lg shadow-sm">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-64 object-cover mb-4 rounded-lg" 
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
            
              <Rating rating={product.rating} />
              <div className="flex items-baseline mt-2">
                <span className="text-xl font-semibold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm line-through ml-2">${product.oldPrice}</span>
                )}
                {product.discount && (
                  <span className="text-red-500 text-sm ml-2 px-4 py-1 bg-red-200 rounded-3xl border border-gray-250">{product.discount}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
        <button className="px-12 py-2 text-black rounded-3xl border border-gray-250">
          View All
        </button>
        </div>
      </section>
    );
  };
  
  export default Product;