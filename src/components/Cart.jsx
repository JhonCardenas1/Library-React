import "./cart.css";

export function Cart({isOpen, onToggleCart}) {
  return (

    <aside className={`carrito-panel ${isOpen ?"activo" : ""}`} id="carrito_panel">
              
      <button id="cerrar_carrito" className="carrito-panel__cerrar" onClick={onToggleCart}>✖</button>
      

      <h2 className="carrito-panel__titulo">Tu carrito</h2>

      <ul className="carrito-panel__lista">
        {/* Items del carrito */}
      </ul>

      <div className="carrito-panel__total">Total: $0</div>

      <button className="carrito-panel__comprar">Comprar</button>
    </aside>
  );
}

export default Cart;
