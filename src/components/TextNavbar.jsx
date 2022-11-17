import { Flex, Heading, IconButton, Icon } from "@chakra-ui/react";
import { BsTypeBold } from "react-icons/bs";

function TextNavbar() {
  return (
    <Flex w={"100%"} gap={"20px"}>
      <Heading mt={"-5px"}>raccnotes</Heading>
      {/* <IconButton icon={<Icon as={BsTypeBold} />} /> */}
    </Flex>
  );
}

export default TextNavbar;
