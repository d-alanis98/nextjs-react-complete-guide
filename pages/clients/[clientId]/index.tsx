import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';


const ClientDetails: React.FC = () => {
    const { query: { clientId } } = useRouter();
    
    return (
        <Container className='p-4'>
            <Heading>Client { clientId }</Heading>
        </Container>

    );
};

export default ClientDetails;