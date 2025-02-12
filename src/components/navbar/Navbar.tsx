import {
  MdSportsHandball,
  MdSportsSoccer,
  MdAdd,
} from "react-icons/md";
  import { AppShell, ScrollArea } from '@mantine/core';
  import NavbarLinksGroup from './NavbarLinksGroup';
  import UserButton from './UserButton';
  import classes from './Navbar.module.css';
  
  const mockdata = [
    { label: 'Dashboard', icon: MdAdd, route: '/' },
    {
      label: 'Market news',
      icon: MdSportsSoccer,
      initiallyOpened: true,
      links: [
        { label: 'Overview', route: '/market-overview' },
        { label: 'Forecasts', route: '/sample' },
        { label: 'Outlook', route: '/sample' },
        { label: 'Real time', route: '/sample' },
      ],
    },
    {
      label: 'Releases',
      icon: MdSportsSoccer,
      links: [
        { label: 'Upcoming releases', route: '/sample' },
        { label: 'Previous releases', route: '/sample' },
        { label: 'Releases schedule', route: '/sample' },
      ],
    },
    { label: 'Analytics', icon: MdSportsHandball, route: '/home' },
  ];
  
  const Navbar: React.FC = () => {
    const links = mockdata.map((item) => <NavbarLinksGroup {...item} key={item.label} />);
  
    return (
      <AppShell.Navbar className={classes.navbar}>  
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
  
        <div className={classes.footer}>
          <UserButton />
        </div>
      </AppShell.Navbar>
    );
  }

export default Navbar;