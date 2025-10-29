import { useState, useEffect } from "react";
import { api } from "../api";
import { Provider } from "./ui/provider";
import { Header } from "./Header";
import { CButton } from "./Button";
import { login } from "../services/login";
import { Input, VStack, Heading, Flex } from "@chakra-ui/react";

interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [ email, setemail ] = useState<string>('')
  const [ userData, setUserData ] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)
  
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
          { (userData === null || userData === undefined) ?
            <Heading as="h1" size="lg" color="gray.700">
              Loading...
            </Heading> :
            <Heading as="h1" size="lg" color="gray.700">
              informações carregadas
            </Heading>
          }
          <Heading as="h1" size="lg" color="gray.700">
            Faça o login
          </Heading>

          <Input 
            placeholder="E-mail"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            size="lg"
            color="gray.800"
          />

          <Input
            placeholder="Senha"
            type="password"
            size="lg"
            color="gray.800"
          />
          <CButton onClick={() => login(email)}
          />
        </VStack>
      </Flex>
    </Provider>
  );
};
