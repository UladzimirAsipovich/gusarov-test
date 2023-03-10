// next
import type { CSSProperties } from 'react';
import Head from 'next/head';
// components
import Title from '@/shared/ui/Title';
import SubTitle from '@/shared/ui/SubTitle';
import BaseLayout from '@/globalApp/layout/BaseLayout';

const stylesSection: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  minHeight: '1000px',
};

const stylesTitle: CSSProperties = {
  paddingTop: '5rem',
};

export default function About() {
  return (
    <BaseLayout>
      <Head>
        <title>О НАС | VLADIMIR OSIPOVICH | GUSAROV TEST</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section style={stylesSection}>
          <header style={stylesTitle}>
            <Title as='h1'>Страница &#34;О нас&#34;</Title>
            <SubTitle>Лучшие идеи - Лучшие решения - Лучший результат</SubTitle>
          </header>
        </section>
      </main>
    </BaseLayout>
  );
}
