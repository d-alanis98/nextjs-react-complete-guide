import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';


const PortfolioItem: React.FC = () => {
    const { query: { portfolioId } } = useRouter();

    return (
        <Container className='p-4'>
            <Heading>Portfolio { portfolioId }</Heading>
        </Container>
    );
};

export default PortfolioItem;