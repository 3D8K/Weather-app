import React, { FC } from "react";
import { Header, Anchor, Box, Button, Text } from "grommet";
import {
  Location as IconLocation,
  Waypoint as IconWaypoint,
} from "grommet-icons";
import { Cloud as IconCloud } from "grommet-icons";
import { themeStore } from "../../store/ThemeStore";
import { observer } from "mobx-react";
import DarkModeToggle from "react-dark-mode-toggle";
import { weatherStore } from "../../store/WeatherStore";

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
      <Box margin="medium" round="medium" direction={"row"} gap={"small"}>
        {!weatherStore.location ? (
          <Box direction={"row"} align={"center"} justify={"center"}>
            <Text>City</Text>
            <Button icon={<IconLocation />} />
          </Box>
        ) : (
          <Button icon={<IconWaypoint />} tip={"Use my current geolocation"} />
        )}
        <DarkModeToggle
          onChange={themeChange}
          checked={themeStore.themeMode === "dark"}
        />
      </Box>
    </Header>
  );
});
