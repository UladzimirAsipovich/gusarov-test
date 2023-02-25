// styles
import styles from './Footer.module.scss';
// components
import Paragraph from '@/shared/ui/Paragraph';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Paragraph className={styles.footer__copyright}>
          © 2019 год. Worky Lite | Многоцелевой дизайн темы{' '}
          <a
            href='https://www.templatemonster.com/'
            target={'_blank'}
            rel='noreferrer'
          >
            TemplateMonster
          </a>
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
