import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function GuestReview({ reviewList }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {reviewList.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__header">
        <span className="review__name">{guestName}</span>
        <span className="review__info">Рейтинг: {rating}</span>
      </div>
      <p className="review__info review__info--height">{review}</p>
    </Box>
  );
}
