import './main.css';
import { Filters } from './Filters';
import { Catalog } from './Catalog';
import { Paginator } from './Paginator';

export function Main(){

    return (
        <main className='contenido__principal'>
            <Filters/>
            <Catalog/>
            <Paginator/>
        </main>
    );
}

export default Main;