import React from "react";
import { UserButton } from "@clerk/nextjs";

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default HomePage;
