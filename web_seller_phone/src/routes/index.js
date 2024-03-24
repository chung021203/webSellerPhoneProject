import HomePage from '../page/HomePage/HomePage';
import OrderPage from '../page/OrderPage/OrderPage';
import ProductPage from '../page/ProductPage/ProductPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import InsertPage from '../page/InsertPage/InsertPage';
import UpdatePage from '../page/UpdatePage/UpdatePage';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/order', component: OrderPage },
    { path: '/products', component: ProductPage },
    { path: '*', component: NotFoundPage, layout: null },
    { path: '/product/add', component: InsertPage },
    { path: '/product/update', component: UpdatePage }
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
