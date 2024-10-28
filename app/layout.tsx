import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
});

export const metadata: Metadata = {
    title: "Board - A Real-Time Visual Collaboration Platform",
    description:
        "Our Collaborative Drawing Board App is a cutting-edge platform designed to enable real-time collaboration on a shared canvas. This interactive app allows users to add and edit text, draw shapes like ellipses and rectangles, and use a freehand pencil tool for dynamic illustrations. Users can also customize their work by changing the color of shapes, making it ideal for creative brainstorming, educational sessions, and remote teamwork. With seamless live updates, autosave features, and easy link sharing, this drawing board fosters an engaging collaborative experience for teams and individuals alike."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Suspense fallback={<Loading />}>
                    <ConvexClientProvider>
                        <Toaster />
                        <ModalProvider />
                        {children}
                    </ConvexClientProvider>
                </Suspense>
            </body>
        </html>
    );
}
