import About from "../components/pages/About";

const commonRouter = [
    {
      path: "/about",
      name: "About",
      component: About,
      layout: "/",
      exact: true
    }
];

export default commonRouter;