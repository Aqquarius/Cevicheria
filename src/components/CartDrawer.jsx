import React from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  
  // Calculate total sum of the cart
  const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Build the WhatsApp message text
    let message = `*¡Hola Cevichería La Caserita!* 🌊🐟\nMe gustaría realizar el siguiente pedido:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}* (x${item.quantity})\n`;
      if (item.extras && item.extras.length > 0) {
        message += `   • Adicionales: _${item.extras.join(', ')}_\n`;
      }
      message += `   • Subtotal: S/ ${item.totalPrice.toFixed(2)}\n\n`;
    });

    message += `*Total a Pagar: S/ ${cartTotal.toFixed(2)}*\n\n`;
    message += `📍 Por favor, confírmenme el tiempo estimado de entrega o si paso a recogerlo. ¡Gracias!`;

    // Save in DB via callback
    if (onCheckout) {
      onCheckout(cartTotal, cartItems);
    }

    // Encode text to URI
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51987654321?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Background Dim Backdrop */}
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Slide-out Sidebar Panel */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h3 className="cart-drawer-title">
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Tu Pedido
          </h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Cerrar carrito">
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg 
                className="cart-empty-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15h8M9 9h.01M15 9h.01" />
              </svg>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>El carrito está vacío</p>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>¡Recorre nuestra carta marina y añade tus platillos favoritos!</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div className="cart-item" key={idx}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  
                  <div className="cart-item-customization">
                    {item.extras && item.extras.length > 0 && (
                      <div style={{ fontSize: '0.75rem', marginTop: '2px' }}>
                        Extras: {item.extras.join(', ')}
                      </div>
                    )}
                  </div>

                  <div className="cart-item-row">
                    <div className="quantity-control" style={{ transform: 'scale(0.85)', transformOrigin: 'left' }}>
                      <button className="qty-btn" onClick={() => onUpdateQuantity(idx, -1)}>-</button>
                      <span className="qty-val">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onUpdateQuantity(idx, 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="cart-item-price">S/ {item.totalPrice.toFixed(2)}</span>
                      <button 
                        className="cart-item-remove" 
                        onClick={() => onRemoveItem(idx)}
                        title="Eliminar plato"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Total Estimado:</span>
              <span>S/ {cartTotal.toFixed(2)}</span>
            </div>
            
            <button className="btn btn-secondary checkout-btn" onClick={handleCheckout}>
              Pedir por WhatsApp 📱
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-dark)', textAlign: 'center', marginTop: '0.75rem', margin: '0.75rem 0 0 0' }}>
              Se generará una plantilla de pedido lista para enviar.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
