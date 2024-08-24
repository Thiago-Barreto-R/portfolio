import React from 'react';
import Home from './home/page';
import RootLayout from './layout';
import About from './about/page';

export default function page() {
  return (
    <RootLayout>
      <Home />
      <About />
    </RootLayout>
  );
}
