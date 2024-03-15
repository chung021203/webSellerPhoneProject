import HomePage from '../page/HomePage/HomePage';
import OrderPage from '../page/OrderPage/OrderPage';
import ProductPage from '../page/ProductPage/ProductPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/order', component: OrderPage },
    { path: '/products', component: ProductPage },
    { path: '*', component: NotFoundPage, layout: null },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
