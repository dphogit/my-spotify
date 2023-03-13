import React from 'react';
import { useRouter } from 'next/router';
import { Navbar, NavLink } from '@mantine/core';
import { IconBrandGithub, IconMicrophone2, IconMusic, IconUserCircle } from '@tabler/icons';
import { ExternalRoutes, PageRoutes } from 'config/constants';
import useStyles from './Sidebar.styles';

const ICON_SIZE = 20;

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  external?: boolean;
}

const SidebarItem = ({ external, ...props }: SidebarItemProps) => {
  const { classes } = useStyles();

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return <NavLink className={classes.navLink} component="a" {...props} {...externalProps} />;
};

const Sidebar = () => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname.toLowerCase() === href.toLowerCase();

  return (
    <Navbar width={{ base: 240 }} px="xs" py="xl">
      <Navbar.Section grow>
        <SidebarItem
          href={PageRoutes.Profile}
          icon={<IconUserCircle size={ICON_SIZE} />}
          label="My Profile"
          active={isActive(PageRoutes.Profile)}
        />
        <SidebarItem
          href={PageRoutes.TopArtists}
          icon={<IconMicrophone2 size={ICON_SIZE} />}
          label="Top Artists"
          active={isActive(PageRoutes.TopArtists)}
        />
        <SidebarItem
          href={PageRoutes.TopTracks}
          icon={<IconMusic size={ICON_SIZE} />}
          label="Top Tracks"
          active={isActive(PageRoutes.TopTracks)}
        />
      </Navbar.Section>
      <Navbar.Section>
        <SidebarItem
          href={ExternalRoutes.GitHub}
          label="GitHub"
          icon={<IconBrandGithub size={ICON_SIZE} />}
          external
        />
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
