import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../../../../layout/base/BaseLayout';


const ProjectDetails: React.FC = () => {
    const { query: { projectId } } = useRouter();
    
    return (
        <BaseLayout>
            <Container padding='4'>
                <Heading textAlign='center'>Project { projectId }</Heading>
            </Container>
        </BaseLayout>
    );
};

export default ProjectDetails;