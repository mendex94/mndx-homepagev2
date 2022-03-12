import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container, Image } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
   return (
        <Box as="main" pb={8}>
            <Head>
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />    
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Felipe Mendes - Homepage</title>
            </Head>
            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
            <Box align='center'>
            <Image src='/lazycat.png' alt='Programmer' marginTop={50}/>
            </Box>
                {children}
                <Footer />
            </Container>
        </Box>
   ) 
}

export default Main
export { getServerSideProps } from '../chakra'