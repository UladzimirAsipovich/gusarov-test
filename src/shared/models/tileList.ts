interface I_TileList {
  id: string;
  title: string;
  href: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

export const TileList: I_TileList[] = [
  {
    id: 'IqFDdNTltX',
    title: 'Архитектура',
    href: '/architecture',
    img: {
      src: '/img/pages/index/Engineering.jpg',
      width: 1024,
      height: 762,
    },
  },
  {
    id: 'IqFDdgfftX',
    title: 'Инжиниринг',
    href: '/engineering',
    img: {
      src: '/img/pages/index/Architecture.jpg',
      width: 1024,
      height: 705,
    },
  },
  {
    id: 'IqFdfDdNTltX',
    title: 'Интерьеры',
    href: '/interior-design',
    img: {
      src: '/img/pages/index/Interior-Design.jpg',
      width: 2000,
      height: 1033,
    },
  },
];
