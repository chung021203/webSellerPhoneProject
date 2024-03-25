import HomePage from '../page/HomePage/HomePage';
import OrderPage from '../page/OrderPage/OrderPage';
import ProductPage from '../page/ProductPage/ProductPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import ProductDetailPage from '../page/ProductDetailPage/ProductDetailPage';
import SignInPage from '../page/SignInPage/SignInPage';
import SignUpPage from '../page/SignUpPage/SignUpPage';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/order', component: OrderPage },
    { path: '/products', component: ProductPage },
    { path: '*', component: NotFoundPage, layout: null },
    { path: '/product-detail', component: ProductDetailPage },
    { path: '/sign-in', component: SignInPage, layout: null },
    { path: '/sign-up', component: SignUpPage, layout: null },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
