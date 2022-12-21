import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';


const BlogEntry: React.FC = () => {
    const { query: { slug } } = useRouter();

    return (
        <Container>
            <Heading className='p-4'>Blog post { (slug as Array<any>)[0] }</Heading>
        </Container>
    );
};

export default BlogEntry;