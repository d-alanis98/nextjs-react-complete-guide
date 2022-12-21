import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { 
    Button, 
    Heading, 
    Divider, 
    Container 
} from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../../layout/base/BaseLayout';


const ClientDetails: React.FC = () => {
    const { 
        query: { clientId },
        push  
    } = useRouter();
    
    const navigateToClientProjects = useCallback(() => {
        push({
            pathname: '/clients/[clientId]/projects',
            query: { clientId }
        });
    }, [push, clientId]);

    return (
        <BaseLayout>
            <Container 
                padding = '4'
                display = 'flex'
                alignItems = 'center' 
                flexDirection = 'column'
                justifyContent = 'center'
            >
                <Heading textAlign='center' marginBottom='0.75rem'>Client { clientId }</Heading>
                <Divider/>
                <Button colorScheme='blue' marginTop='0.75rem' onClick={ navigateToClientProjects }>
                    Navigate to client projects
                </Button>
            </Container>
        </BaseLayout>

    );
};

export default ClientDetails;