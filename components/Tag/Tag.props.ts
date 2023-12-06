import { ReactNode } from "react";

export interface TagProps extends React.ComponentProps<'div'> {
    children: ReactNode
    fontsize?: "s" | "m" ;
    color: 'ghost' | 'red' | 'grey' | 'gren' | 'primary';
    href?: string;
}