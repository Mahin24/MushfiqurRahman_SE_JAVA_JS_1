import About from "../components/pages/About";
import Landing from "../components/pages/Landing";

const commonRouter = [
  {
      path: "",
      name: "About",
      component: Landing,
      layout: "/",
      exact: true
    },
    {
      path: "/about",
      name: "About",
      component: About,
      layout: "/",
      exact: true
    }
];

export default commonRouter;