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
import styles from './SubTitle.module.scss';
// data
import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'], weight: '300' });

interface ComponentProps
  extends PropsWithChildren,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {
  as?: 'p' | 'span';
  textInverse?: boolean | undefined;
}

const SubTitle: FC<ComponentProps> = ({
  children,
  as = 'p',
  textInverse,
  className,
  ...props
}) => {
  return createElement(
    as,
    {
      className: CN(
        oswald.className,
        styles.subTitle,
        { [styles.subTitle_textInverse]: textInverse },
        className ? ` ${className}` : ''
      ),
      ...props,
    },
    children
  );
};

export default SubTitle;
