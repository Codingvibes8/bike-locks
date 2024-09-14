import React from "react";
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header'
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "../globals.css";

const roboto = Roboto({subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata: Metadata = {
    title: "Bike LocksStore",
    description: "Online Bike Lock Website",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Header/>
        <main className="flex-1 wrapper">{children}</main>
        <Footer/>
        </body>
        </html>
    )
}










