import { ReactNode } from "react";

export interface HtagProps {
    teg: 'h1' | 'h2' | 'h3';
    children: ReactNode
}