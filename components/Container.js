import React from 'react';
import Head from 'next/head';

function Container({ children }) {
    return (
        <div className="relative w-full mx-0 md:mx-auto px-0 sm:px-6 lg:px-8">
            <Head>
                <title>Animal Crossing Ambience</title>
            </Head>
            { children }
        </div>
    );
}

export default Container;