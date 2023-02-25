// next
import type { FC } from 'react';
import Image from 'next/image';
// styles
import CN from 'classnames';
import styles from './styles/TopBanner.module.scss';
// components
import Title from '@/shared/ui/Title';
import SubTitle from '@/shared/ui/SubTitle';
import Button from '@/shared/ui/Button';
// data
import background from './img/monstroid2-small.webp';
import screenshot from './img/monstroid2-small-pic.webp';

interface ComponentProps {
  compact?: boolean | undefined;
}

const TopBanner: FC<ComponentProps> = ({ compact }) => {
  return (
    <aside className={styles.topBanner}>
      <Image
        className={styles.topBanner__background}
        src={background}
        alt='Background image'
      />
      <div className={styles.topBanner__content}>
        <div
          className={CN(styles.topBanner__imageSide, {
            [styles.compact]: compact,
          })}
        >
          <Image
            className={styles.topBanner__image}
            src={screenshot}
            alt='Site screenshot'
          />
        </div>
        <div
          className={CN(styles.topBanner__sloganSide, {
            [styles.compact]: compact,
          })}
        >
          <header
            className={CN(styles.topBanner__slogan, {
              [styles.compact]: compact,
            })}
          >
            <Title
              textInverse
              className={CN(styles.topBanner__title, {
                [styles.compact]: compact,
              })}
            >
              Мы строим будущее
            </Title>
            <SubTitle
              textInverse
              className={CN(styles.topBanner__subTitle, {
                [styles.compact]: compact,
              })}
            >
              Лучшие идеи - Лучшие решения - Лучший результат
            </SubTitle>
          </header>
          <Button
            className={CN(styles.topBanner__button, {
              [styles.compact]: compact,
            })}
          >
            Смотреть!
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default TopBanner;
