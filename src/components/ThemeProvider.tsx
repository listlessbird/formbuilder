"use client"
import { ThemeProvider as NextProviderThemes } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props}: ThemeProviderProps) {
    return <NextProviderThemes {...props}>{children}</NextProviderThemes>
}
