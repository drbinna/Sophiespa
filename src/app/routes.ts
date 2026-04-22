import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { Treatments } from "./components/Treatments";
import { Services } from "./components/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: About },
      { path: "treatments", Component: Treatments },
      { path: "services", Component: Services },
    ],
  },
]);