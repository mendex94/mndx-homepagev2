import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraphs'

const Work = () => {
    return (
        <Layout title='DinDin'>
            <Container marginTop={25}>
                <Title>
                    DinDin <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    Plataforma de cursos web, totalmente resposiva para todas as plataformas voltada para educação financeira.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://mendex94.github.io/dindin/'>
                        https://mendex94.github.io/dindin/ <ExternalLinkIcon mx='2px' />   
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Web, totalmente responsivo</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS</span>
                    </ListItem>
                </List>
                <WorkImage src='/dindin.png' alt='Website DinDin' />
                <WorkImage src='/dindin2.png' alt='Website DinDin' />
                <WorkImage src='/dindin3.png' alt='Website DinDin' />
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'