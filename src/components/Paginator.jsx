import './paginator.css';

export function Paginator(){

    return(
        <nav className="paginador" id="paginador" aria-label="Paginación de libros">
            <button className="paginador__boton" data-pagina="1">1</button>
            <button className="paginador__boton" data-pagina="2">2</button>
            <button className="paginador__boton" data-pagina="3">3</button>
            <button className="paginador__boton" data-pagina="4">4</button>
             <button className="paginador__boton" data-pagina="5">5</button>
        </nav>

    );
}

export default Paginator;