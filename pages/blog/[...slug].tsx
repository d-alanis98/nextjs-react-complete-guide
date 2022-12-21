import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';


const BlogEntry: React.FC = () => {
    const { query: { slug } } = useRouter();

    console.log(slug);

    return (
        <BaseLayout>
            <Container padding='4'>
                <Heading textAlign='center'>Blog post</Heading>
            </Container>
        </BaseLayout>
    );
};

export default BlogEntry;