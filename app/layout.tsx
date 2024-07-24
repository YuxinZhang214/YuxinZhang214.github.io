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
      <body className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}