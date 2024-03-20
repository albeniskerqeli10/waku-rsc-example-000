import '../styles.css';
import type { ReactNode } from 'react';

import { Header } from '../components/header.js';
// import { Footer } from '../components/footer.js';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito'] min-h-[100vh] flex flex-col pb-2">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <title>SlickStore</title>
      <Header />
      <main className="flex flex-1 border-none border-red-500  items-center justify-center *:min-h-64 *:min-w-64">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};


const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};
