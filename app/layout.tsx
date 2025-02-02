import '../styles/globals.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

export const metadata = {
  title: 'Yuxin Zhang',
  description: 'Yuxin Zhang\'s website',
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

      <body className="min-h-screen flex flex-col font-satoshi">

        {/* Header */}
        <div id='header' className='px-6 sm:px-12 md:px-16 lg:px-24 py-4 sm:py-6 lg:py-8'>
          <Header />
        </div>

        {/* Content */}
        <main className="flex-grow px-6 sm:px-12 md:px-16 lg:px-24 w-full">
          {children}
        </main>

        <div id='footer' className='px-6 sm:px-12 md:px-16 lg:px-24 py-4 sm:py-6 lg:py-8'>
          <Footer />
        </div>

      </body>
    </html>
  );
}