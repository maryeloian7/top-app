import { ReactNode } from "react";

export interface ButtonProps extends React.ComponentProps<'button'> {
    children: ReactNode;
    appearance: "primaty" | "ghost";
    arrow?: 'right' | 'down' | 'none';
}