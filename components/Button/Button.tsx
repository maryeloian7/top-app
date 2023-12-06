import Image from "next/image";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primaty",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
            [styles.right]: arrow == "right",
          })}
        >
          <Image src="/icons/Arrow.svg" alt="arrow" width={6} height={10}/>
        </span>
      )}
    </button>
  );
};
