// Components
import { AppNavigationBar } from '../../components/navigation/AppNavigationBar';


type BaseLayoutProps = {
    children: React.ReactNode
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
    <>
        <AppNavigationBar />
        { children }
    </>
);