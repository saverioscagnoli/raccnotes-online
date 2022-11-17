import { Flex } from "@chakra-ui/react";
import MiscNavbar from "./MiscNavbar";
import TextNavbar from "./TextNavbar";

function Navbar() {
  return (
    <Flex w={"100%"} h={"5rem"} padding={"20px"} id={"navbar"}>
      <TextNavbar />
      <MiscNavbar />
    </Flex>
  );
}

export default Navbar;
