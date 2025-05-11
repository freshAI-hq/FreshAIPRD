// src/app/layout.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'FreshAI - AI Growth Engine for Your Business',
  description: 'Drive traffic and automate growth with FreshAI.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ZEHSFTC7NW`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZEHSFTC7NW');
          `}
        </script>

        {/* Add any meta tags, title, or external links here */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
