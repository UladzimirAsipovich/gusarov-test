import React, { useEffect, useRef } from 'react';
import styles from './UpButton.module.scss';

interface PropType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const UpButton: React.FC<PropType> = ({ children }): JSX.Element => {
  const UpBtnRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function showUpBtnController() {
      const scrolled =
        window.pageYOffset < document.documentElement.clientHeight;

      if (UpBtnRef.current) {
        scrolled
          ? (UpBtnRef.current.style.opacity = '0')
          : (UpBtnRef.current.style.opacity = '1');
      }
    }

    window.addEventListener('scroll', showUpBtnController, { passive: true });
  }, []);

  return (
    <div
      className={styles.upButton}
      ref={UpBtnRef}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path d='M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
      </svg>
      {children}
    </div>
  );
};

export default UpButton;
