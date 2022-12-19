import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';


const ProjectDetails: React.FC = () => {
    const { query: { projectId } } = useRouter();
    
    return (
        <Container className='p-4'>
            <Heading>Project { projectId }</Heading>
        </Container>
    );
};

export default ProjectDetails;