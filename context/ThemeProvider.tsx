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
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
};

type ThemeProviderProps = {
    children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState("");

    const handleThemeChange = () => {
        if (mode === "dark") {
            setMode("light");
            document.documentElement.classList.add("light");
        } else {
            setMode("dark");
            document.documentElement.classList.add("dark");
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
