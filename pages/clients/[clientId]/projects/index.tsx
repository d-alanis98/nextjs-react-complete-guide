import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../../../layout/base/BaseLayout';


const ProjectsList: React.FC = () => {
    const { query: { clientId } } = useRouter();
    
    return (
        <BaseLayout>
            <Container className='p-4'>
                <Heading textAlign='center'>Projects list of { clientId }</Heading>
            </Container>
        </BaseLayout>

    );
};

export default ProjectsList;