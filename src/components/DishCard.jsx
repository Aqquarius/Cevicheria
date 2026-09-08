import React from 'react';

export default function DishCard({ dish, onClick }) {
  const cardClass = [
    dish.category === 'Bebidas' ? 'beverage-card' : '',
    dish.name === 'Trio marino' ? 'trio-marino' : '',
    'dish-card'
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClass} onClick={onClick}>
      <div className="dish-card-img-wrapper">
        <img src={dish.image} alt={dish.name} className="dish-card-img" />
        <span className="dish-badge">{dish.category}</span>
        <span className="dish-price-badge">S/ {dish.price.toFixed(2)}</span>
      </div>

      <div className="dish-card-body">
        <h3 className="dish-card-title">{dish.name}</h3>
        <p className="dish-card-desc">{dish.description}</p>

        <div className="dish-card-footer" />
      </div>
    </div>
  );
}
