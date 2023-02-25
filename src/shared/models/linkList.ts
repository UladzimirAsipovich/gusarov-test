interface I_LinkList {
  id: string | number;
  href: string;
  label: string;
  title?: string;
}

export const LinkList: I_LinkList[] = [
  {
    id: 'WmD9fC4CgP',
    href: '/',
    label: 'Главная',
  },
  {
    id: '9OhILwAsDQ',
    href: '/about',
    label: 'О нас',
  },
  {
    id: 'X30TUkjsMz',
    href: '/services',
    label: 'Услуги',
  },
  {
    id: 'Ba2J5ke13p',
    href: '/blog',
    label: 'Блог',
  },
];
