import React from 'react';

export default function DishModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="dish-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          &times;
        </button>

        <div className="modal-img-side">
          <img src={dish.image} alt={dish.name} className="modal-img" />
        </div>

        <div className="modal-details-side">
          <div>
            <span className="section-tag" style={{ margin: 0 }}>{dish.category}</span>
            <h3 className="modal-title">{dish.name}</h3>

            <p className="modal-desc">{dish.description}</p>
          </div>

          {/* Spiciness selector removed */}

          <div className="modal-action-row">
            <div className="modal-price-panel">
              <span className="price-sub">Precio</span>
              <span className="price-val">S/ {dish.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
