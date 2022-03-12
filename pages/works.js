import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDindin from '../public/dindin.png'
import Layout from '../components/layouts/article'


const Works = () => {
    return (
        <Layout>
        <Container marginTop={25}>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='dindin' title='DinDin' thumbnail={thumbDindin}>
                        Plataforma de cursos voltado para educação financeira
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works