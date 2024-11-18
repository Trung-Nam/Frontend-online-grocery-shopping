import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import App from "../App";
import instance from "../utils/axiosInstance";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: ({ params }) => instance.get(`/products/${params.id}`)

            },
            { path: "/blog", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
            { path: "/cart", element: <Cart /> },
        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
]);

export default router;
