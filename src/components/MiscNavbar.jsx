import { Flex, IconButton, Icon, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BsFilePdfFill } from "react-icons/bs";

function MiscNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === "dark";

  return (
    <Flex w={"100%"} gap={"20px"} justifyContent={"flex-end"}>
      <IconButton
        icon={dark ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
      <IconButton icon={<Icon as={BsFilePdfFill} />} onClick={() => print()} />
    </Flex>
  );
}

export default MiscNavbar;
