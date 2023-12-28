import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./logo_guest.svg";
import bed from "./logo_bed.svg";
import badroom from "./logo_badroom.svg";
import bathroom from "./logo_bathroom.svg";

export default function PropertyDetails({
  guests = 1,
  bedrooms = 0,
  beds = 1,
  baths,
}) {
  return (
    <Box className="price">
      <Heading border>Деталі властивості:</Heading>
      <ul className="price__list">
        <ListItem imageSrc={guest}>
          <span>{guests}</span>
          <span>гості</span>
        </ListItem>

        <ListItem imageSrc={badroom}>
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>

        <ListItem imageSrc={bathroom}>
          <span>{baths}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
