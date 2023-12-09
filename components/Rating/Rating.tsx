import { RatingProps } from "./Rating.props";
import StarIcon from "../../public/icons/Star.svg";
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

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };


  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          key={i}
          className={cn( {  [styles.editable]: isEditable })}
        >
          <Image
            src={StarIcon}
            alt="Star"
            width={15}
            height={15}
            className={cn(styles.star, { [styles.filled]: i < currentRating})}
          />
        </span>
      );
    });
    setRatingArray(updateArray);
  };

  return (
    <div className={cn()} {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
