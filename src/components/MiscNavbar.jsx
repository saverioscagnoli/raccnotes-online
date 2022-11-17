import {
  Flex,
  IconButton,
  Icon,
  useColorMode,
  Spinner,
  Button,
  Link,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BsFilePdfFill } from "react-icons/bs";
import { SiKofi } from "react-icons/si";
import { useState } from "react";

function MiscNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === "dark";
  const [clicked, setClicked] = useState(false);
  const print = () => {
    setClicked(true);
    window.print();
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <Flex w={"100%"} gap={"20px"} justifyContent={"flex-end"}>
      <IconButton
        icon={dark ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
      <IconButton
        icon={clicked ? <Spinner /> : <Icon as={BsFilePdfFill} />}
        onClick={() => print()}
      />
      <a href={"https://ko-fi.com/saverioscagnoli"} target={"_blank"}>
        <Button>{<Icon as={SiKofi} />}&nbsp; Ko-fi</Button>
      </a>
    </Flex>
  );
}

export default MiscNavbar;
