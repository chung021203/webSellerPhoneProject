import HomePage from '../page/HomePage/HomePage';
import OrderPage from '../page/OrderPage/OrderPage';
import ProductPage from '../page/ProductPage/ProductPage';
import CartPage from '../page/CartPage/CartPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import UpdatePage from '../page/UpdatePage/UpdatePage';
import InsertPage from '../page/InsertPage/InsertPage';
import CheckoutPage from '../page/CheckoutPage/CheckoutPage';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/order', component: OrderPage },
    { path: '/products', component: ProductPage },
    { path: '/cart', component: CartPage },
    { path: '*', component: NotFoundPage, layout: null },
    { path: '/update', component: UpdatePage },
    { path: '/insert', component: InsertPage },
    { path: '/checkout', component: CheckoutPage },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
