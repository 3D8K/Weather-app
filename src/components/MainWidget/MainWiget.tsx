import React from "react";
import { Box } from "grommet";
import { useGeoLocation } from "../../hooks/useGeoLocation";

export function MainWiget() {
  const location = useGeoLocation();
  return (
    <Box margin={"small"} round="medium" elevation={"medium"} pad="small">
      <Box direction={"row"}>
        {location.loaded ? JSON.stringify(location) : "ok"}
      </Box>
    </Box>
  );
}
