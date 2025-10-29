import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const CButton = ({ onClick }: IDButton) => {
    return (
        <Button
            onClick={onClick}
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