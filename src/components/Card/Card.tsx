import { Provider } from "../ui/provider";
import { Header } from "../Header/Header";
import { CButton } from "../Button/Button";
import { login } from "../../services/login";
import { Input, VStack, Heading, Flex } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Provider>
      <Header />
      <Flex
        as="main"
        minH="92vh"
        bg="purple.600"
        align="center"
        justify="center"
        p={4}
      >
        <VStack
          as="form"
          bg="white"
          borderRadius="lg"
          p={6}
          w="100%"
          maxW="400px"
          boxShadow="lg"
        >
          <Heading as="h1" size="lg" color="gray.700">
            Faça o login
          </Heading>

          <Input placeholder="E-mail" type="email" size="lg" color="gray.800" />

          <Input
            placeholder="Senha"
            type="password"
            size="lg"
            color="gray.800"
          />
          <CButton event={login} />
        </VStack>
      </Flex>
    </Provider>
  );
};
