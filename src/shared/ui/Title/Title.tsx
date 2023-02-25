// next
import type {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  DetailedHTMLProps,
} from 'react';
import { createElement } from 'react';
// styles
import CN from 'classnames';
import styles from './Title.module.scss';
// data
import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'], weight: '700' });

interface ComponentProps
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textInverse?: boolean | undefined;
}

const Title: FC<ComponentProps> = ({
  children,
  as = 'h2',
  textInverse,
  className,
  ...props
}) => {
  return createElement(
    as,
    {
      className: CN(
        oswald.className,
        styles.title,
        { [styles.title_textInverse]: textInverse },
        className ? ` ${className}` : ''
      ),
      ...props,
    },
    children
  );
};

export default Title;
