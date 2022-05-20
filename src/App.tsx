import React from "react";
import { Grommet as GrommetProvider } from "grommet";
import { Layout } from "./layout";
import { Theme } from "./Theme";
import { themeStore } from "./store/ThemeStore";
import { observer } from "mobx-react";

export const App = observer(() => {
  return (
    <GrommetProvider theme={Theme} themeMode={themeStore.themeMode} full>
      <Layout />
    </GrommetProvider>
  );
});

export default App;
