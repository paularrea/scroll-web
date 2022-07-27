import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "../components/pages/components/Project";
import { routes } from "./components/routesArr";

const AppRoutes = ({ currentLocale, handleChange }) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              exact
              element={route.component}
            />
          );
        })}
        <Route
          path="/work/:id"
          exact
          element={
            <Project
              currentLocale={currentLocale}
              handleChange={handleChange}
            />
          }
          currentLocale={currentLocale}
          handleChange={handleChange}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
