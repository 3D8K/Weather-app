import React from "react";
import { Box } from "grommet";
import { HeaderComponent } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { observer } from "mobx-react";

export const Layout = observer(() => {
  return (
    <Box fill>
      <HeaderComponent />
      <Box flex>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
});
