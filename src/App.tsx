import React from "react";
import { Grommet as GrommetProvider } from "grommet";
import { Theme } from "./Theme";
import { themeStore } from "./store/ThemeStore";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { LayoutRoutes } from "./routes";

export const App = observer(() => {
  return (
    <BrowserRouter>
      <GrommetProvider theme={Theme} themeMode={themeStore.themeMode} full>
        <LayoutRoutes />
      </GrommetProvider>
    </BrowserRouter>
  );
});

export default App;
