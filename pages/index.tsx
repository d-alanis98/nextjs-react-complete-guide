import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../layout/base/BaseLayout';

const Home: React.FC = () => (
    <BaseLayout>
        <Container className='p-4'>
            <Heading textAlign='center'>Hello from Next.js</Heading>
        </Container>
    </BaseLayout>
);

export default Home;
