import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container marginTop={25}>
            <Heading as='h1'>Whoops!</Heading>
            <Text>A página que você está procurando não foi encontrada, mas fica tranquilo vamos encontrar um lugar melhor para você ir.</Text>
            <Divider my={6} />
            <Box my={6} align='center'>
                <NextLink href='/' passHref>
                    <Button colorScheme='teal'>Voltar para o início</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound