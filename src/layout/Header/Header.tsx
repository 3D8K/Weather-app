import React, { FC } from "react";
import { Header, Anchor, Box } from "grommet";
import { Cloud as IconCloud } from "grommet-icons";
import { themeStore } from "../../store/ThemeStore";
import { observer } from "mobx-react";
import DarkModeToggle from "react-dark-mode-toggle";

export const HeaderComponent: FC = observer(() => {
  const themeChange = () => {
    themeStore.themeMode === "dark"
      ? themeStore.setLight()
      : themeStore.setDark();
  };
  return (
    <Header direction="row" background="brand" flex={false} elevation="small">
      <Anchor
        href="/"
        color="header-text"
        margin="medium"
        size="large"
        label="Weather check"
        icon={<IconCloud />}
        gap="small"
      />
      <Box margin="medium" round="medium">
        <DarkModeToggle
          onChange={themeChange}
          checked={themeStore.themeMode === "dark"}
        />
      </Box>
    </Header>
  );
});
