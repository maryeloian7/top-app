import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
  children,
  fontsize = "m",
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, styles[fontsize])} {...props}>
      {children}
    </p>
  );
};
