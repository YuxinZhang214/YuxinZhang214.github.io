import '../styles/globals.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
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
      </body>
    </html>
  );
}
