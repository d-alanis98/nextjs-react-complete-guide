import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';

const ClientsPage: React.FC = () => (
    <BaseLayout>
        <Container className='p-4'>
            <Heading textAlign='center'>Clients section</Heading>
        </Container>
    </BaseLayout>
);

export default ClientsPage;