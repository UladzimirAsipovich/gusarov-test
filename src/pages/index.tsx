// next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// styles
import CN from 'classnames';
import styles from '@global/styles/pages/Index.module.scss';
import sharedStyles from '@shared/styles/module/Shared.module.scss';
// data
import { LinkList as NavbarLinkList } from '@shared/models/linkList';
import { TileList } from '@/shared/models/tileList';
import { Poppins } from '@next/font/google';
// components
import useLightBox from '@/features/LightBox';
import Title from '@/shared/ui/Title';
import SubTitle from '@/shared/ui/SubTitle';
import Button from '@/shared/ui/Button';
import Paragraph from '@/shared/ui/Paragraph';
import BaseLayout from '@/globalApp/layout/BaseLayout';
import SocialContacts from '@/widgets/social-contacts';

const poppins = Poppins({ subsets: ['devanagari'], weight: '300' });

const GalleryList: string[] = [
  '/img/pages/index/gallery/gallery-1-768x788.jpg',
  '/img/pages/index/gallery/gallery-2-768x788.jpg',
  '/img/pages/index/gallery/gallery-3-768x788.jpg',
  '/img/pages/index/gallery/gallery-4-768x788.jpg',
  '/img/pages/index/gallery/gallery-5-768x788.jpg',
  '/img/pages/index/gallery/gallery-6-768x788.jpg',
];

const PartnersList: string[] = [
  '/img/pages/index/partners/home-brands-1.webp',
  '/img/pages/index/partners/home-brands-2.webp',
  '/img/pages/index/partners/home-brands-3.webp',
  '/img/pages/index/partners/home-brands-4.webp',
  '/img/pages/index/partners/home-brands-5.webp',
  '/img/pages/index/partners/home-brands-6.webp',
];

export default function Index() {
  const { LiteboxComponent, openLightboxOnSlide } = useLightBox(GalleryList);

  return (
    <BaseLayout>
      <Head>
        <title>VLADIMIR OSIPOVICH | GUSAROV TEST</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={styles.hero}>
          <Image
            className={styles.hero__background}
            src={'/img/pages/index/slide-1 (1).jpg'}
            alt='Background image'
            width={1440}
            height={960}
          />
          <div className={styles.hero__backgroundLayer} />
          <div className={styles.hero__content}>
            <header className={styles.hero__slogan}>
              <Title textInverse className={styles.hero__title}>
                ???? ???????????? ??????????????
              </Title>
              <SubTitle textInverse className={styles.hero__subTitle}>
                ???????????? ???????? - ???????????? ?????????????? - ???????????? ??????????????????
              </SubTitle>
            </header>
            <Button
              as='a'
              size='lg'
              href={NavbarLinkList[0].href}
              className={CN(styles.hero__button)}
            >
              ????????????????
            </Button>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.about__container}>
            <div className={styles.about__content}>
              <header className={CN(styles.about__header, 'bottomDivider')}>
                <SubTitle className={styles.about__subTitle}>
                  ?? ????????????????
                </SubTitle>
                <Title className={styles.about__title}>
                  ???? ??????????????
                  <br />?? ???????????????????? ?? ????????????????????
                </Title>
              </header>
              <div className={styles.about__text}>
                <header>
                  <Paragraph weight={500}>
                    ???? ?????????????????? ?????????????????????????? ???????????????????????? ??????????????, ??????????
                    ???????????????? ???????????????????????? ?????????? ?? ???????????? ???????????????? ???????????? ????
                    ?????????????? ????????????! ?????? ???????? ?????????????? ???????????????????????? ?? ????????????
                    ??????????????????!
                  </Paragraph>
                </header>
                <Paragraph>
                  ?????? ???????? ?????????????? ???????????????????????? ?? ???????????? ?????????????????? ???? ???????? ??????????
                  3 ????????????, ?????????????????????????? ???? ???????? ???????????????????? ??????. ???????? ???????????? ???
                  ?????????????????????? ???????????????????? ???????????????????????? ???????? ?? ?????????????? ?????? ????????????
                  ??????????????, ?????? ?????????????? ???? ??????????????????? ?? ???????? ???????????????? ???? ??????????????????
                  ???????????????? ???????????????????????? ??????????????, ?????????????????????? ??????????????????????, ??
                  ?????????? ?????????????? ????????????????. ?????????????? ???? ???????????????????????????? ?? ??????????????
                  ??????????????????, ?????????????? ???? ????????????????????, ???????????? ?????????????????? ??
                  ???????????????????? ?????????????????????? ????????????????.
                </Paragraph>
              </div>
            </div>
            <div className={styles.about__tiles}>
              {TileList.map((Tile, ind) => (
                <div className={styles.tile} key={Tile.id + ind}>
                  <div className={styles.tile__container}>
                    <Image
                      className={styles.tile__background}
                      src={Tile.img.src}
                      alt={Tile.title}
                      width={Tile.img.width}
                      height={Tile.img.height}
                    />
                    <Link href={Tile.href} className={styles.tile__title}>
                      <Title textInverse as='span'>
                        {Tile.title}
                      </Title>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.choice}>
          <div className={styles.choice__container}>
            <div
              className={CN(styles.choice__content, styles.choice__advantages)}
            >
              <header className={styles.choice__header}>
                <SubTitle textInverse className={styles.choice__subTitle}>
                  ????????????????????????
                </SubTitle>
                <Title
                  textInverse
                  className={CN(styles.choice__title, 'bottomDivider')}
                >
                  ???????????????? ?????? <br /> ?????????????????????????? ??????????????????
                </Title>
                <Paragraph textInverse className={styles.choice__chapter}>
                  ???????????????????????????? ????????????????????, ?????????????????????????????????? ???????????? ??????????????
                  ???????????????????? ?????????????????????????? ?? ???????????????????? ???????????? ??
                  ???????????????????????????????? ????????????, ???????????????????????????? ???????????????????????? ??
                  ?????????????????????????? ??????????????????????????. Archus ???????????????????? ?????? ???????????? ??
                  ?????????????????????? ???????????????????????? ?? ????????????????????????????, ???????????????????????? ??????
                  ???????????????? ?? ???????????????????? ????????????????????????.
                </Paragraph>
                <Button inverseTheme size='lg'>
                  ????????????????
                </Button>
              </header>
            </div>
            <div
              className={CN(
                styles.choice__content,
                styles.choice__testimonials
              )}
            >
              <Image
                className={styles.choice__background}
                src={'/img/pages/index/home-testimonials-bg.jpg'}
                alt='Background image'
                width={722}
                height={1073}
              />
              <div className={styles.choice__backgroundLayer} />
              <header className={styles.choice__header}>
                <SubTitle textInverse className={styles.choice__subTitle}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z' />
                  </svg>
                  ????????????
                </SubTitle>
                <Title
                  textInverse
                  className={CN(
                    styles.choice__title,
                    'bottomDivider',
                    'bottomDivider_inverse'
                  )}
                >
                  ?????? ???????? <br /> ?????????????? ??????????????
                </Title>
                <Paragraph textInverse className={styles.choice__chapter}>
                  ???? ???????????? ???????????????????????? ???????????????? ?????????? ?????????????????? ???????????? ?? ????????
                  ?? ?????????????????? 80 000 ????. ?????????? ?????????????????????????? ?????????????? ??????????????????
                  ???? 13 ??????????????.
                </Paragraph>
                <SubTitle textInverse className={styles.choice__signature}>
                  <strong>????????</strong>, ?????????????????? ??????????
                </SubTitle>
              </header>
            </div>
          </div>
        </section>

        <section className={styles.portfolio}>
          <div className={styles.portfolio__container}>
            <div className={styles.portfolio__content}>
              <header className={CN(styles.portfolio__header, 'bottomDivider')}>
                <SubTitle className={styles.portfolio__subTitle}>
                  ??????????????????
                </SubTitle>
                <Title className={styles.portfolio__title}>
                  ???????? ??????????????
                  <br />
                  ??????????????
                </Title>
              </header>
              <div className={styles.portfolio__text}>
                <Paragraph>
                  ???? ???????????????????????????????? ???? ?????????????????? ????????????????, ???????????????????? ????????
                  ????????????????????????????????. ???????? ???????????????????? ?????????????????? ?????????????????? ??????????,
                  ?????? ?????????????? ?????????????????? ???????????????????????? ?????? ??????. ???? ???? ??????????????????????
                  ??????????????????, ???????????????????????? ???????????? ?? ?????????????????????????? ????????????????????.
                  ?????????????????????????? ?????????? ???????????????????? ?????????????????????????? ???????????????? ??
                  ?????????????????????????? ??????????????????! ??????????????????.
                </Paragraph>
              </div>
            </div>
          </div>
        </section>

        <section className={CN(sharedStyles.imageGallery, styles.gallery)}>
          {[LiteboxComponent]}
          <div className={sharedStyles.imageGallery__container}>
            <div className={sharedStyles.imageGallery__content}>
              {GalleryList.map((image, ind) => (
                <div
                  className={sharedStyles.imageGallery__imageItem}
                  key={'image_gallery_' + ind}
                  onClick={() => openLightboxOnSlide(ind + 1)}
                >
                  <Image
                    className={sharedStyles.imageGallery__image}
                    src={image}
                    alt='Background image'
                    width={768}
                    height={788}
                  />
                </div>
              ))}
            </div>
            <Button inverseTheme size='lg' className={styles.gallery__moreBtn}>
              ????????????????
            </Button>
          </div>
        </section>

        <section className={styles.partners}>
          <div className={styles.partners__container}>
            <div className={styles.partners__content}>
              <header className={CN(styles.partners__header, 'bottomDivider')}>
                <SubTitle className={styles.partners__subTitle}>
                  ????????????????
                </SubTitle>
                <Title className={styles.partners__title}>
                  ???????? ?????????????? ??
                  <br />
                  ????????????????
                </Title>
              </header>
              <div
                className={CN(sharedStyles.imageGallery, styles.imageGallery)}
              >
                <div className={sharedStyles.imageGallery__container}>
                  <div
                    className={CN(
                      sharedStyles.imageGallery__content,
                      styles.imageGallery__content
                    )}
                  >
                    {PartnersList.map((image, ind) => (
                      <div
                        className={sharedStyles.imageGallery__imageItem}
                        key={'image_partners_' + ind}
                      >
                        <Image
                          className={CN(
                            sharedStyles.imageGallery__image,
                            styles.imageGallery__image
                          )}
                          src={image}
                          alt='Background image'
                          width={124}
                          height={97}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contacts}>
          <div className={styles.contacts__container}>
            <div className={styles.contacts__content}>
              <div className={styles.contacts__info}>
                <header
                  className={CN(styles.contacts__header, 'bottomDivider')}
                >
                  <SubTitle className={styles.contacts__subTitle}>
                    ?????????????? ????????????????
                  </SubTitle>
                  <Title className={styles.contacts__title}>
                    ???????????????????? ????????????????????
                  </Title>
                </header>
                <div>
                  <Paragraph fontFamilyClass={poppins.className}>
                    ??????????????:
                    <a href='tel:555-123-4567'>(555)123-4567</a>
                  </Paragraph>
                  <Paragraph fontFamilyClass={poppins.className}>
                    ??????????:{' '}
                    <a href='mailto:info@demolink.org'>info@demolink.org</a>
                  </Paragraph>
                  <Paragraph fontFamilyClass={poppins.className}>
                    ??????????: ??????????????????????, ????. ???????????????????? 32, 22303
                  </Paragraph>
                  <Paragraph fontFamilyClass={poppins.className}>
                    ?????????? ????????????:
                  </Paragraph>
                  <Paragraph fontFamilyClass={poppins.className}>
                    <span>?????????????????????? ??? ??????????????&#32;</span>
                    <span>
                      <time>10:00</time>&nbsp;???&nbsp;<time>23:00</time>.
                    </span>
                  </Paragraph>
                  <Paragraph fontFamilyClass={poppins.className}>
                    <span>?????????????? ??? ??????????????????????&#32;</span>
                    <span>
                      <time>10:00</time>&nbsp;???&nbsp;<time>19:00</time>.
                    </span>
                  </Paragraph>
                </div>
                <SocialContacts />
              </div>
              <div className={styles.contacts__form}>
                <form name='contactForm' className={sharedStyles.form}>
                  <Paragraph className={sharedStyles.form__item}>
                    <input
                      type='text'
                      name='userName'
                      id='userName'
                      placeholder='???????? ??????'
                      className={sharedStyles.form__input}
                    />
                  </Paragraph>
                  <Paragraph className={sharedStyles.form__item}>
                    <input
                      type='text'
                      name='userEmail'
                      id='userEmail'
                      placeholder='???????? ??????????'
                      className={sharedStyles.form__input}
                    />
                  </Paragraph>
                  <Paragraph className={sharedStyles.form__item}>
                    <textarea
                      name='userMessage'
                      id='userMessage'
                      placeholder='???????? ??????????????????'
                      className={sharedStyles.form__textArea}
                    />
                  </Paragraph>

                  <Button type='submit' className={sharedStyles.form__submit}>
                    ??????????????????
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
