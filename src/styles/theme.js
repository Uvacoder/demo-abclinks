import { extendTheme } from "@chakra-ui/react";
import { colorMode } from "../data";

const config = {
  initialColorMode: colorMode,
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
