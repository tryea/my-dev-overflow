import React, { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="flex min-h-screen w-full items-center justify-center">
            {children}
        </main>
    );
};

export default AuthLayout;
