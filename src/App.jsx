import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";

function App() {
  const [text, setText] = useState("# Hello, *world!*");

  return (
    <Box>
      <Navbar />
      <Editor text={text} setText={setText} />
    </Box>
  );
}

export default App;
