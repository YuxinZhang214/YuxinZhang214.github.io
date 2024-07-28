import '../styles/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'My Personal Website',
  description: 'Digital Designer & Webflow Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>

      <body className="min-h-screen bg-gray-100 flex flex-col font-satoshi">

        {/* Header */}
        <div id='header' className='px-24 py-8'>
          <Header />
        </div>

        {/* Content */}
        <main className="flex-grow container px-24">
          {children}
        </main>

      </body>
    </html>
  );
}