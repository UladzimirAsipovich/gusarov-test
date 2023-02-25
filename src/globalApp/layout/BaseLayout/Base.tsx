// next
import type { FC, PropsWithChildren } from 'react';
// components
import UpButton from '@/features/upButton';
import Footer from '@/widgets/footer';
import Navbar from '@/widgets/navbar';
import TopBanner from '@/widgets/top-banner';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <section>
        <header>
          <TopBanner compact />
          <Navbar />
        </header>
      </section>
      {children}
      <TopBanner />
      <Footer />
      <UpButton />
    </div>
  );
};

export default BaseLayout;
