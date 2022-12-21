import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
// Layout
import { BaseLayout } from '../../layout/base/BaseLayout';


const PortfolioItem: React.FC = () => {
    const { query: { portfolioId } } = useRouter();

    return (
        <BaseLayout>
            <Container className='p-4'>
                <Heading textAlign='center'>Portfolio { portfolioId }</Heading>
            </Container>
        </BaseLayout>
    );
};

export default PortfolioItem;