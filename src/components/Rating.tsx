import { useState } from "react";
import styles from "./Rating.module.css";

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClicked = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleFormSubmitted = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className={styles.thankYouPanel + " center"}>
      <img src="/illustration-thank-you.svg" alt="tank-you_ico" />
      <p className={styles.selected}>You selected {selectedRating} out of 5</p>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>
        We appreciated you taking the time to give a rating. If you ever need
        more support, don't hestiate to get in touch.
      </p>
    </div>
  ) : (
    <form onSubmit={(e) => handleFormSubmitted(e)} className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg" alt="star_ico" />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feddback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(item)}
            className={styles.rating}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        type="submit"
        disabled={selectedRating === undefined}
        className={styles.submit}
      >
        Submit
      </button>
    </form>
  );
}
