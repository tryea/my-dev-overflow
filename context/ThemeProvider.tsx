"use client";

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type ThemeContextType = {
    mode: "light" | "dark" | "system";
    setMode: Dispatch<SetStateAction<"light" | "dark" | "system">>;
};

type ThemeProviderProps = {
    children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState<"light" | "dark" | "system">("system");

    const handleThemeChange = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setMode("dark");
            document.documentElement.classList.add("dark");
        } else {
            setMode("light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        handleThemeChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
