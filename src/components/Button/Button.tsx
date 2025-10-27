import { Button } from "@chakra-ui/react"

interface loginProps {
    event: () => void
}

export const CButton = ({ event }: loginProps) => {
    return (
        <Button
            onClick={event}
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.600" }}
            _active={{ bg: "purple.700" }}
            size="lg"
            w="100%"
            >
            Entrar
        </Button>
    )
}