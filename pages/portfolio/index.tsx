import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';


const Portfolio: React.FC = () => (
    <BaseLayout>
        <Container padding='4'>
            <Heading textAlign='center'>Portfolio section</Heading>
        </Container>
    </BaseLayout>
);

export default Portfolio;