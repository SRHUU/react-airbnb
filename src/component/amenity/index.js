import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./logo_pool.svg";
import gym from "./logo_gym.svg";
import breackfast from "./logo_breackfast.svg";
import wifi from "./logo_wifi.svg";
import parking from "./logo_parking.svg";
import pets from "./logo_pets.svg";
import transfer from "./logo_transfer.svg";
import doorman from "./logo_doorman.svg";
import roomservice from "./logo_roomservice.svg";
import forchild from "./logo_forchild.svg";

export default function Amenities({ amenities }) {
  return (
    <Box className="price">
      <Heading border>Зручності</Heading>
      <ul className="price__list">
        {Object.entries(amenities).map(
          ([key, value]) =>
            value && (
              <ListItem key={key} imageSrc={getLogoByKey(key)}>
                <span>{key}</span>
              </ListItem>
            )
        )}
      </ul>
    </Box>
  );
}

function getLogoByKey(key) {
  switch (key) {
    case "hasPool":
      return pool;
    case "hasGym":
      return gym;
    case "hasFreeBreakfast":
      return breackfast;
    case "hasFreeWiFi":
      return wifi;
    case "hasParking":
      return parking;
    case "hasPetsAllowed":
      return pets;
    case "hasAirportShuttle":
      return transfer;
    case "hasConciergeService":
      return doorman;
    case "hasRoomService":
      return roomservice;
    case "hasChildFriendly":
      return forchild;

    default:
      return null;
  }
}
