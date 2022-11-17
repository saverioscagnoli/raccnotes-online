import { Flex, Heading, IconButton, Icon, Image } from "@chakra-ui/react";
import { BsTypeBold, BsTypeItalic, BsTextCenter } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";
import { ImPageBreak } from "react-icons/im";
import { DeleteIcon } from "@chakra-ui/icons";
import { Utils } from "../utils";

function TextNavbar({ text, setText }) {
  const utils = new Utils(text, setText);

  return (
    <Flex w={"100%"} gap={"20px"}>
      <Image
        id={"logo"}
        src={"raccoon.png"}
        w={"50px"}
        h={"50px"}
        _hover={{ cursor: "pointer" }}
      />
      <Heading mt={"-5px"}>raccnotes</Heading>
      <IconButton
        icon={<Icon as={BsTypeBold} />}
        onClick={() => utils.bold()}
      />
      <IconButton
        icon={<Icon as={BsTypeItalic} />}
        onClick={() => utils.italic()}
      />
      <IconButton
        icon={<Icon as={BsTextCenter} />}
        onClick={() => utils.center()}
      />
      <IconButton
        icon={<Icon as={TbMathFunction} />}
        onClick={() => utils.math()}
      />
      <IconButton
        icon={<Icon as={ImPageBreak} />}
        onClick={() => utils.pageBreak()}
      />
      <IconButton
        icon={<DeleteIcon />}
        color={"red.500"}
        onClick={() => utils.clear()}
      />
    </Flex>
  );
}

export default TextNavbar;
