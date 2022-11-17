import { Flex, Textarea, Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

function Editor({ text, setText }) {
  return (
    <Flex w={"100%"} padding={"10px"} gap={"20px"}>
      <Textarea
        id={"input"}
        w={"50%"}
        h={"89vh"}
        defaultValue={"# Hello, *world!*"}
        onChange={(evt) => setText(evt.target.value)}
      ></Textarea>
      <Box
        id={"output"}
        w={"50%"}
        h={"89vh"}
        border={"2px"}
        borderRadius={"10px"}
        padding={"10px"}
        overflow={"auto"}
      >
        <ReactMarkdown
          components={ChakraUIRenderer()}
          children={text}
          remarkPlugins={[remarkMath, remarkGfm, remarkEmoji, remarkBreaks]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        />
      </Box>
    </Flex>
  );
}

export default Editor;
