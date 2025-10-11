import './filters.css';

export function Filters() {
  return (
  
  <aside className="filtros">

      <h2 className="filtros__titulo">Categorías</h2>

      <ul className="filtros__lista">

        <li className="filtros__item">
          <label><input type="checkbox" /> Terror</label>
        </li>

        <li className="filtros__item">
          <label><input type="checkbox" /> Suspenso</label>
        </li>

        <li className="filtros__item">
          <label><input type="checkbox" /> Romance</label>
        </li>
        
        <li className="filtros__item">
          <label><input type="checkbox" /> Fantasía</label>
        </li>

      </ul>
      
    </aside>
  );
}

export default Filters;
