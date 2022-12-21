import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../../layout/base/BaseLayout';


const ClientDetails: React.FC = () => {
    const { query: { clientId } } = useRouter();
    
    return (
        <BaseLayout>
            <Container padding='4'>
                <Heading textAlign='center'>Client { clientId }</Heading>
            </Container>
        </BaseLayout>

    );
};

export default ClientDetails;