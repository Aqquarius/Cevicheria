import React, { useState } from 'react';
import DishCard from './DishCard';

const CATEGORIES = ['Todos', 'Ceviches', 'Segundos', 'Bebidas'];

export default function DishList({ dishes, onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = activeCategory === 'Todos' || dish.category === activeCategory;
    const matchesSearch = 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu-sec" id="carta">
      <div className="menu-header">
        <span className="section-tag">Nuestra Carta</span>
        <h2 className="section-title">Elige tus Sabores Preferidos</h2>
        <p style={{ color: 'var(--gray-dark)' }}>
          Explora nuestra selección de ceviches frescos, platos calientes tradicionales y bebidas refrescantes.
        </p>
      </div>

      <div className="menu-filters-wrapper">
        {/* Interactive Search Bar */}
        <div className="search-bar">
          <svg 
            className="search-icon" 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Buscar por plato o ingrediente (ej. pulpo, arroz)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--gray-dark)' }}
              title="Limpiar búsqueda"
            >
              &times;
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Todos' ? 'Toda la Carta' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="dishes-grid">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <DishCard 
              key={dish.id} 
              dish={dish} 
              onClick={() => onSelectDish(dish)}
            />
          ))
        ) : (
          <div className="no-dishes">
            <svg 
              viewBox="0 0 24 24" 
              width="48" 
              height="48" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              style={{ color: 'var(--gray-medium)', marginBottom: '1rem' }}
            >
              <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            <h3>No encontramos platos</h3>
            <p>Prueba buscando con palabras clave diferentes o cambia de categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
