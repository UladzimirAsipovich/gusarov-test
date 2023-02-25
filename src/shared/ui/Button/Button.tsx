// next
import type {
  FC,
  DetailedHTMLProps,
  PropsWithChildren,
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
} from 'react';
import { createElement } from 'react';
// styles
import CN from 'classnames';
import styles from './Button.module.scss';
// data
import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'], weight: '700' });

interface ComponentProps
  extends PropsWithChildren,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  as?: 'a' | 'button';
  size?: 'sm' | 'md' | 'lg';
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  ping?: string | undefined;
  rel?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  inverseTheme?: boolean | undefined;
}

const Button: FC<ComponentProps> = ({
  as = 'button',
  children,
  className,
  inverseTheme,
  size = 'sm',
  ...props
}) =>
  createElement(
    as,
    {
      className: CN(
        oswald.className,
        styles.button,
        styles['button_' + size],
        {
          [styles.button_inverse]: inverseTheme,
        },
        className ? ` ${className}` : ''
      ),
      ...props,
    },
    children
  );

export default Button;
