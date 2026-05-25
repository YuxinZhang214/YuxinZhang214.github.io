import '../styles/globals.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { LanguageProvider } from './context/LanguageContext';

export const metadata = {
  title: 'Yuxin Zhang',
  description: 'Yuxin Zhang\'s personal website — Software Engineer, AI/ML & Data Visualization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <LanguageProvider>
          <Header />
          <main
            style={{
              maxWidth: 'var(--maxw)',
              margin: '0 auto',
              padding: '0 var(--pad-x)',
            }}
          >
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
