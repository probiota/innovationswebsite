import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: {
    default: 'Probiota Innovations | Private Label Gummy & Supplement Manufacturer',
    template: '%s | Probiota Innovations',
  },
  description: 'Launch your supplement brand in 40 days. We help brands launch efficiently with a fully integrated manufacturing ecosystem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
