import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }) {
    return (
        <ClerkProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </ClerkProvider>
    );
}

export default MyApp;
