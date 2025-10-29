import {
  Heading,
  Flex,
} from "@chakra-ui/react";

export const Header = () => {
    return(
      <Flex
        as="header"
        minH="8vh"
        align="center"
        justify="space-between"
        p={4}
        bg="white"
        boxShadow="sm"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Heading as="h1" size="md" color="purple.600">
          Basic Bank
        </Heading>
      </Flex>
    )
}