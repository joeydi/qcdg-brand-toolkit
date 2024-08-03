export interface MenuItem {
  name: string;
  url: string;
  target?: string;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Guidelines',
    url: '',
  },
  {
    name: 'Logo',
    url: 'logo',
  },
  {
    name: 'Colors',
    url: 'colors',
  },
  {
    name: 'Typography',
    url: 'typography',
  },
  {
    name: 'Applications',
    url: 'applications',
  },
];
