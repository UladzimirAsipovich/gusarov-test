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
import styles from './Paragraph.module.scss';
// data
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '500'],
});

interface ComponentProps
  extends PropsWithChildren,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {
  as?: 'p' | 'span';
  weight?: 300 | 500 | undefined;
  textInverse?: boolean | undefined;
  fontFamilyClass?: string | undefined;
}

const Paragraph: FC<ComponentProps> = ({
  children,
  as = 'p',
  weight,
  textInverse,
  className,
  fontFamilyClass,
  ...props
}) => {
  return createElement(
    as,
    {
      className: CN(
        !fontFamilyClass ? montserrat.className : fontFamilyClass,
        styles.paragraph,
        {
          [styles[`paragraph_${weight}`]]: weight,
          [styles.paragraph_textInverse]: textInverse,
        },
        className ? ` ${className}` : ''
      ),
      ...props,
    },
    children
  );
};

export default Paragraph;
