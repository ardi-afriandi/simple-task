import React from 'react';
import {
  faTrashCan, faCloud, faFloppyDisk,
  faSquareCheck, faHardDrive, faShareNodes, faClockRotateLeft, faStar, faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import SidebarHeader from './SidebarHeader';
import SidebarButton from './SidebarButton';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const sidebarItems = [
    { icon: faSquareCheck, title: 'Priority' },
    { icon: faHardDrive, title: 'My Drive' },
    { icon: faShareNodes, title: 'Shared with me' },
    { icon: faClockRotateLeft, title: 'Recent' },
    { icon: faStar, title: 'Starred' },
    { icon: faTrashCan, title: 'Trash' },
  ];

  const sidebarStorageItems = [
    { icon: faCloud, title: 'Storage' },
    { icon: faFloppyDisk, title: '8.16 GB used' },
  ];

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <SidebarHeader data={{ icon: faGoogleDrive, title: 'Drive' }} />
      <hr className="sidebar-divider my-0" />
      <SidebarButton data={{ icon: faPlus, title: 'New' }} />
      <hr className="sidebar-divider" />
      {sidebarItems.map((item) => <SidebarItem data={item} />)}
      <hr className="sidebar-divider" />
      {sidebarStorageItems.map((item) => <SidebarItem data={item} />)}
    </ul>
  );
};

export default Sidebar;
