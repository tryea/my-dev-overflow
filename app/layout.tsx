import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
    title: "My Dev Overflow",
    description:
        "A community-driver platform for asking and aswering programming questions. Get help, share knowledge and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms data structures and more.",
    icons: {
        icon: "/assets/images/site-logo.svg",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: "primary-gradient",
                    footerActionLink:
                        "primary-text-gradient hover:text-primary-500",
                },
            }}
        >
            <html lang="en">
                <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
