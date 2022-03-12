import Link from 'next/link'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`
const Logo = () => {
    return (
        <Link href="/">
        <a>
        <LogoBox>
        <Image src='logo.png' width='20px' height='20px' alt="logo" />
        <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c'
        fontWeight='bold'
        ml={3}>
        Felipe Mendes
        </Text>
        </LogoBox>     
        </a>
        </Link>
    )
}

export default Logo