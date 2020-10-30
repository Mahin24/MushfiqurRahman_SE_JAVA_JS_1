import AddProduct from "../components/dashboard/AddProduct";
import Home from "../components/dashboard/Home";
import Product from "../components/dashboard/ProductList";

const dashboardRoutes = [
    {
      path: "/",
      name: "Dashboard",
      component: Home,
      layout: "/admin"
    },
    {
      path: "/product",
      name: "Product List",
      component: Product,
      layout: "/admin"
    },
    {
      path: "/add-product",
      name: "Add Product",
      component: AddProduct,
      layout: "/admin"
    },
    {
      path: "/edit-product/:productId",
      name: "Dashboard",
      component: Product,
      layout: "/admin"
    }
]

export default dashboardRoutes;