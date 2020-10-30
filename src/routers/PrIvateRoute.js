import AddProduct from "../components/dashboard/AddProduct";
import EditProduct from "../components/dashboard/EditProduct";
import Home from "../components/dashboard/Home";
import ProductList from "../components/dashboard/ProductList";
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
      component: ProductList,
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
      component: EditProduct,
      layout: "/admin"
    }
]

export default dashboardRoutes;