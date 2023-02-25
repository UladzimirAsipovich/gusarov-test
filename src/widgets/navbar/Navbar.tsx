// next
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// styles
import CN from 'classnames';
import styles from './styles/Navbar.module.scss';
// components
import { NavbarLinkList } from './model/data';
import Button from '@/shared/ui/Button';
// data
import logoImg from './img/logo.webp';
import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'], weight: '400' });

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { route } = useRouter();

  useEffect(() => {
    const resizeListener = (e: Event) => {
      const { currentTarget } = e;
      if ((currentTarget as Window).innerWidth > 640) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', resizeListener, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <nav className={styles.navbar__content}>
          <div className={styles.navbar__body}>
            <div className={styles.navbar__start}>
              <div className={styles.navbar__logo}>
                <Link
                  href={NavbarLinkList[0].href}
                  className={styles.navbar__logoLink}
                >
                  <Image
                    className={styles.navbar__logoImage}
                    src={logoImg}
                    width={197}
                    height={50}
                    alt='Worky Logo'
                  />
                </Link>
              </div>
            </div>
            <div
              className={CN(styles.navbar__middle, {
                [styles.active]: open,
              })}
            >
              <ul className={styles.navbar__links}>
                {NavbarLinkList.map((link) => (
                  <li className={styles.navbar__linkItem} key={link.id}>
                    <Link
                      href={link.href}
                      className={CN(oswald.className, styles.navbar__link, {
                        [styles.active]: link.href === route,
                      })}
                      title={link.title}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.navbar__end}>
              <Button
                aria-label='Открыть или закрыть панель'
                className={CN(styles.navbar__burger, {
                  [styles.active]: open,
                })}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                    {/*! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                    <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
