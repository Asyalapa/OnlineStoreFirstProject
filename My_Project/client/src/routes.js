import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, ARTICLES_ROUTE, INDEX_ROUTE, LOGIN_ROUTE,
    PRODUCT_ROUTE, REG_ROUTE, SHOP_ROUTE, ABOUT_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import FrontPage from "./pages/FrontPage";
import Aboutus from "./pages/Aboutus";
import Articles from "./pages/Articles";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUTE,
        component: Basket
    }
]

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        component: FrontPage
    },
    {
        path: ABOUT_ROUTE,
        component: Aboutus
    },
    {
        path: ARTICLES_ROUTE,
        component: Articles
    },
    {
        path: SHOP_ROUTE,
        component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        component: ProductPage
    },
    {
        path: REG_ROUTE,
        component: Auth
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
]