import React from 'react';
import Header from './header';
import References from './pages/references';

export default function Content({ activeSection }) {
    return (
        <div className="flex flex-col flex-grow bg-red-300 ">
            {/* Üst Menü */}
            <Header />

            {/* Ana Görsel veya İçerik Bölümü */}
            <References />

            {/* Footer */}
        </div>
    );
}
