import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
    const now = new Date();
    const secondsDiff = Math.floor(
        (now.getTime() - createdAt.getTime()) / 1000
    );

    if (secondsDiff < 60) {
        return `${secondsDiff} seconds ago`;
    } else if (secondsDiff < 3600) {
        const minutes = Math.floor(secondsDiff / 60);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (secondsDiff < 86400) {
        const hours = Math.floor(secondsDiff / 3600);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
        const days = Math.floor(secondsDiff / 86400);
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
};

export const numberToReadable = (num: number): string => {
    if (num >= 1000000) {
        return `${Math.round(num / 100000) / 10}M+`;
    } else if (num >= 1000) {
        return `${Math.round(num / 100) / 10}K+`;
    } else {
        return String(num);
    }
};
