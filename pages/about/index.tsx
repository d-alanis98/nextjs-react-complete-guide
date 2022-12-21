
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';

const About: React.FC = () => (
    <BaseLayout>
        <Container padding='4'>
            <Heading textAlign='center' className='text-blue-500'>About section</Heading>
        </Container>
    </BaseLayout>
);

export default About;