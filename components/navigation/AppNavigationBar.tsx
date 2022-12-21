import Link from 'next/link';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import {
    ChatIcon,
    HamburgerIcon,
    AttachmentIcon,
    CheckCircleIcon,
    InfoOutlineIcon
} from '@chakra-ui/icons';


const NavigationLinks = [
    {
        id: 0,
        label: 'Home',
        href: '/',
        icon: HamburgerIcon
    },
    {
        id: 1,
        label: 'Portfolio',
        href: '/portfolio',
        icon: AttachmentIcon
    },
    {
        id: 2,
        label: 'About',
        href: '/about',
        icon: InfoOutlineIcon
    },
    {
        id: 3,
        label: 'Clients',
        href: '/clients',
        icon: CheckCircleIcon
    },
    {
        id: 4,
        label: 'Blog',
        href: '/blog/match-all',
        icon: ChatIcon 
    }
];

export const AppNavigationBar: React.FC = () => (
    <nav className='p-5 bg-slate-700 text-white font-bold'>
        <List className='flex flex-row items-center justify-center' gap='1.25rem'>
            {
                NavigationLinks.map(navigationLink => (
                    <ListItem
                        key = { navigationLink.id }
                    >
                        <Link href={ navigationLink.href } className='flex items-center justify-start'>
                            <ListIcon 
                                as = { navigationLink.icon }
                            />
                            { navigationLink.label }
                        </Link>
                    </ListItem>
                ))
            }
        </List>
    </nav>
);