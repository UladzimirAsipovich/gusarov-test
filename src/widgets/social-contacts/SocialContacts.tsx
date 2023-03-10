// styles
import styles from './SocialContacts.module.scss';

const SocialContacts = () => {
  return (
    <div className={styles.socialContacts}>
      <a
        className={styles.socialContacts__item}
        href='https://www.facebook.com/zemezlab/'
        target='_blank'
        rel='noreferrer'
        aria-label='Facebook'
      >
        <span className={styles.socialContacts__label}>Facebook</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          className={styles.socialContacts__icon}
        >
          <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
        </svg>
      </a>
      <a
        className={styles.socialContacts__item}
        href='https://twitter.com/zemezlab'
        target='_blank'
        rel='noreferrer'
        aria-label='Twitter'
      >
        <span className={styles.socialContacts__label}>Twitter</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className={styles.socialContacts__icon}
        >
          <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
        </svg>
      </a>
      <a
        className={styles.socialContacts__item}
        href='https://plus.google.com/'
        target='_blank'
        rel='noreferrer'
        aria-label='Google-plus'
      >
        <span className={styles.socialContacts__label}>Google-plus</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 640 512'
          className={styles.socialContacts__icon}
        >
          <path d='M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z' />
        </svg>
      </a>
      <a
        className={styles.socialContacts__item}
        href='https://vimeo.com/'
        target='_blank'
        rel='noreferrer'
        aria-label='Vimeo'
      >
        <span className={styles.socialContacts__label}>Vimeo</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          className={styles.socialContacts__icon}
        >
          <path d='M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z' />
        </svg>
      </a>
      <a
        className={styles.socialContacts__item}
        href='https://www.youtube.com/channel/UCPW43un8VFXHe9LxKpR_2Hg'
        target='_blank'
        rel='noreferrer'
        aria-label='YouTube'
      >
        <span className={styles.socialContacts__label}>Youtube</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
          className={styles.socialContacts__icon}
        >
          <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
        </svg>
      </a>
      <a
        className={styles.socialContacts__item}
        href='https://www.pinterest.com/'
        target='_blank'
        rel='noreferrer'
        aria-label='Pinterest'
      >
        <span className={styles.socialContacts__label}>Pinterest</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 496 512'
          className={styles.socialContacts__icon}
        >
          <path d='M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z' />
        </svg>
      </a>
    </div>
  );
};

export default SocialContacts;
