import NavBar from "@/components/shared/navbar/NavBar";
import React from "react";

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <main className="background-light850_dark100 relative">
            <NavBar />
            <div className="flex">
                Leftsidebar
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">{children}</div>
                </section>
                Rightsidebar
            </div>
            Toaster
        </main>
    );
};

export default RootLayout;
