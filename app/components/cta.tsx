import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";

import avatar from "~/assets/images/avatar.svg";

export default function Cta() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 0, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          w="60%"
          order={{ base: 1, md: 0 }}
          flex={1}
          spacing={{ base: 5, md: 10 }}
          mt={{ base: 8, md: 0 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi there,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              i'm Bakhtiar
            </Text>
          </Heading>
          <Text color={"gray.100"}>
            A passionate frontend & backend developer from Indonesia Indonesian
            🇮🇩. I’m currently working on PT. Doran Sukses Indonesia as Web
            Developer. Currently learning ReactJS, VueJS, AngularJS, React
            Native, Flutter, NextJS, NuxtJS, NestJs, Laravel. How to reach me?
            adhabakhtiar@gmail.com
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              color={"gray.100"}
              _hover={{ bg: "red.500" }}
            >
              Read More About Me
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Browse My Github Repository
            </Button>
          </Stack>
        </Stack>
        <Flex
          order={{ base: 0, md: 1 }}
          mt={{ base: "0 !important", md: 8 }}
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top="5%"
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          /> */}
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image w={"full"} h={"full"} fit={"contain"} src={avatar}></Image>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        fill="#474bff"
        d="M442,271Q431,302,432.5,341.5Q434,381,400.5,398Q367,415,340,439.5Q313,464,276.5,463Q240,462,203.5,463Q167,464,140.5,439Q114,414,89.5,390.5Q65,367,40,340Q15,313,13.5,276.5Q12,240,24,207Q36,174,58,149Q80,124,101.5,101Q123,78,145,46.5Q167,15,203.5,30.5Q240,46,276.5,30.5Q313,15,337.5,44Q362,73,397.5,86.5Q433,100,429.5,140Q426,180,439.5,210Q453,240,442,271Z"
      />
    </Icon>
  );
};
