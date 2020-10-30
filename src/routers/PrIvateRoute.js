import Home from "../components/dashboard/Home";
import Product from "../components/dashboard/Product";

const dashboardRoutes = [
    {
      path: "/",
      name: "Dashboard",
      component: Home,
      layout: "/admin"
    },
    {
      path: "/product",
      name: "Dashboard",
      component: Product,
      layout: "/admin"
    },
]

export default dashboardRoutes;