import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { MainWiget } from "./components/MainWidget/MainWiget";
import { Page404 } from "./components/404Page";

export const LayoutRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainWiget />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
