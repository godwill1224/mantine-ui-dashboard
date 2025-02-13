import {
  MdOutlineDashboard,
  MdOutlineNewReleases,
  MdOutlineAnalytics,
} from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";

  import { AppShell, ScrollArea } from '@mantine/core';
  import NavbarLinksGroup from './NavbarLinksGroup';
  import UserButton from './UserButton';
  import classes from './Navbar.module.css';
  
  const mockdata = [
    { label: 'Dashboard', icon: MdOutlineDashboard, route: '/admin' },
    {
      label: 'Market news',
      icon: FaRegNewspaper,
      initiallyOpened: true,
      links: [
        { label: 'Overview', route: '/admin/market-overview' },
        { label: 'Forecasts', route: '/admin/sample' },
        { label: 'Outlook', route: '/admin/sample' },
        { label: 'Real time', route: '/admin/sample' },
      ],
    },
    {
      label: 'Releases',
      icon: MdOutlineNewReleases,
      links: [
        { label: 'Upcoming releases', route: '/admin/sample' },
        { label: 'Previous releases', route: '/admin/sample' },
        { label: 'Releases schedule', route: '/admin/sample' },
      ],
    },
    { label: 'Analytics', icon: MdOutlineAnalytics, route: '/admin/home' },
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