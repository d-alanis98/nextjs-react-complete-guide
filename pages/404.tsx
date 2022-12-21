import { 
    Heading, 
    Container 
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
// Layout
import { BaseLayout } from '../layout/base/BaseLayout';

const NotFoundPage: React.FC = () => (
    <BaseLayout>
        <Container 
            gap = '0.75rem'
            color = 'red.300'
            display = 'flex' 
            paddingTop = '8rem' 
            alignItems = 'center' 
            flexDirection = 'column'
            justifyContent = 'center'
        >
            <WarningTwoIcon 
                fontSize = '7.5rem'
            />
            <Heading textAlign='center'>Content not found</Heading>
        </Container>
    </BaseLayout>
);

export default NotFoundPage;