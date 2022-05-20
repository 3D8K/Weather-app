import React, { FC } from "react";
import { Header, Anchor, CheckBox, Box } from "grommet";
import { Cloud as IconCloud } from "grommet-icons";
import { themeStore } from "../../store/ThemeStore";
import { observer } from "mobx-react";

export const HeaderComponent: FC = observer(() => {
  const themeChange = () => {
    themeStore.themeMode === "dark"
      ? themeStore.setLight()
      : themeStore.setDark();
  };
  return (
    <Header direction="row" background="brand" flex={false}>
      <Anchor
        href="/"
        color="text"
        margin="medium"
        size="large"
        label="Weather check"
        icon={<IconCloud />}
        gap="small"
      />
      <Box margin="medium" round="medium">
        <CheckBox toggle onClick={themeChange} />
      </Box>
    </Header>
  );
});
