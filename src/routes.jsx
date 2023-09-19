import React from "react";
import { Route } from "react-router-dom";
import HomeRoutes from "./components/Home/routes";
import CalculateRoutes from "./components/Calculate/routes";
import FormRoutes from "./components/Form/routes";
import BlogRoutes from "./components/Blog/routes";

const routes = [
  ...HomeRoutes,
  ...CalculateRoutes,
  ...FormRoutes,
  ...BlogRoutes,
];

const renderRoute = (route, props) => (
  <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    element={
      <div>
        <route.component {...props} />
      </div>
    }
  />
);

export const routeGenerator = ({ ...props }) =>
  routes.map((route) =>
    renderRoute(route, {
      ...props
    })
);