import { RatingProps } from "./Rating.props";
import Image from "next/image";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";

export const Rating = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <Image
          src="/icons/Star.svg"
          alt="Star"
          width={15}
          height={15}
          className={cn(styles.star, { [styles.filled]: i < currentRating })}
        />
      );
    });
    setRatingArray(updateArray);
  };

  return <div className={cn()} {...props}>
    {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
  </div>;
};
