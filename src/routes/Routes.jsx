import { lazy } from "react";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import('../pages/Home'));
const CreateBook = lazy(() => import('../pages/CreateBook'));
const Library = lazy(() => import('../pages/Library'));
const NotFound = lazy(() => import('../pages/NotFound'));
const BookForm = lazy(() => import('../components/BookForm'));
const Login = lazy(() => import('../pages/Login'));



/*import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
*/

export const routes = [

    {
        path: '/',
        element: <Home/>,
        name: 'Home',
        isAvailableInMenu: true
    },

    {
    path: '/agregar',
    // accesible para usuarios con rol "admin"
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <CreateBook />
      </ProtectedRoute>
    ),
    name: 'CreateBook',
    isAvailableInMenu: true,
  },

    {
    path: '/agregar/:id',
    //accesible para usuarios con rol "admin"
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <BookForm />
      </ProtectedRoute>
    ),
    name: 'EditBook',
    isAvailableInMenu: false,
  },

  {
    path: '/biblioteca',
    // accesible para usuarios con rol "admin"
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <Library />
      </ProtectedRoute>
    ),
    name: 'Library',
    isAvailableInMenu: true,
  },

    {
        path:'/login', 
        element: <Login/>,
        name: 'Login',
        isAvailableInMenu: true

    },

    {
        path: '*',
        element: <NotFound/>,
        name: 'NotFound',
        isAvailableInMenu: false,
    }
];

export function getRoutes(){
    return(
        routes.filter((route) =>
            route.isAvailableInMenu)
    )
}

export function getNavigationRoutes(){
    return (routes.map((route) => (
        { 
        path: route.path,
        name: route.name, 
        element: route.element
        }
    )));

}

export default getNavigationRoutes;
