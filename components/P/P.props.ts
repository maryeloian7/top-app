import { ReactNode } from "react";

export interface PProps extends React.ComponentProps<'p'> {
    children: ReactNode
    fontsize?: "s" | "m" | "l";
}