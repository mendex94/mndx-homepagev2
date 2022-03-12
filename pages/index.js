import NextLink from 'next/link'
import { Container,
         Box,
         Heading,
         Image,
         Link,
         List,
         ListItem,
         useColorModeValue, 
         Button,
         Icon
       } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraphs'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoInstagram
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center' marginTop={25}>
            Olá, eu sou um desenvolvedor full-stack localizado em SP!
            </Box>
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
            Felipe Mendes
            </Heading>
            <p>Artesão Digital (Desenvolvedor / Designer)</p>
            </Box>
            <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align='center'>
            <Image borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='/felipe.jpeg'
            alt='Foto de Perfil'/>
            </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
            Work
            </Heading>
            <Paragraph>Felipe é um desenvolvedor full-stack e freelancer localizado
                em São Paulo com uma paixão por construir serviços digitais.
                Ele tem um talento especial para o planejamento e design até a solução de problemas
                da vida real com código.</Paragraph>
            <Box align='center' my={4}>
            <NextLink href="/works" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfólio
            </Button>
            </NextLink>
            </Box>        
            </Section>
            <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
            Bio
            </Heading>
            <BioSection>
            <BioYear>1994</BioYear>
            Nasceu em Barbacena, Brasil.    
            </BioSection>
            <BioSection>
            <BioYear>2018</BioYear>
            Trabalhou como Suporte Tecnico Bilingue no AppleCare, também auxiliava o time de treinamento com os new hires.    
            </BioSection>
            <BioSection>
            <BioYear>2022 até agora</BioYear>
            Está estudando para se tornar um dev full-stack.    
            </BioSection>
            </Section>
            <Section delay={0.3}>
            <Heading as='h3' variant='section-title'>
            I ♥
            </Heading>
            <Paragraph> Música, arte, cinema, esportes, gastronomia e aprender coisas novas.</Paragraph>    
            </Section>
            <Section delay={0.4}>
            <Heading as='h3' variant='section-title'>
            Minhas redes
            </Heading>
            <List>
            <ListItem>
            <Link href='https://github.com/mendex94' target='_blank'>
            <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub}/>}>
            @mendex94
            </Button>
            </Link>    
            </ListItem>
            <ListItem>
            <Link href='https://www.linkedin.com/in/luiz-felipe-couto-mendes/' target='_blank'>
            <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin}/>}>
            @mendex94
            </Button>
            </Link>    
            </ListItem>
            <ListItem>
            <Link href='https://www.instagram.com/mendex1994/' target='_blank'>
            <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram}/>}>
            @mendex94
            </Button>
            </Link>    
            </ListItem>
            </List>    
            </Section>
        </Container>
        </Layout>
    )
}

export default Page