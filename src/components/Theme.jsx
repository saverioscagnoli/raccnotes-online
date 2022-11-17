import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("whiteAlpha.900", "#252525")(props),
    },
  }),
};

const Theme = extendTheme({ styles });

export default Theme;
