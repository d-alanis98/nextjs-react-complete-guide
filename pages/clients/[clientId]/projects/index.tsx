import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';


const ProjectsList: React.FC = () => {
    const { query: { clientId } } = useRouter();
    
    return (
        <Container className='p-4'>
            <Heading>Projects list of { clientId }</Heading>
        </Container>

    );
};

export default ProjectsList;