import Link from 'next/link';
import { 
    List, 
    Heading, 
    Divider, 
    ListItem, 
    Container 
} from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';

const clients = [
    {
        id: 'dalanisr',
        name: 'Damian Alanis Ramirez'
    },
    {
        id: 'nalanisr',
        name: 'Nancy Alanis Ramirez'
    }
];

const ClientsPage: React.FC = () => (
    <BaseLayout>
        <Container className='p-4'>
            <Heading textAlign='center' marginBottom='0.75rem'>Clients section</Heading>
            <Divider/>
            <Heading as='h4' textAlign='center' size='lg' marginTop='0.75rem'>List of clients</Heading>
            <List>
                {
                    clients.map(client => (
                    <ListItem key={client.id}>
                        <Link 
                            href = {{
                                pathname: 'clients/[clientId]',
                                query: { clientId: client.id }
                            }}
                        >
                            { client.name }
                        </Link>
                    </ListItem>
                    ))
                }
            </List>
        </Container>
    </BaseLayout>
);

export default ClientsPage;