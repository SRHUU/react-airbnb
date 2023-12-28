import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

export default function Attractions({ list }) {
  return (
    <Box>
      <div className="attract__block">
        <Heading border>Пам'ятки поблизу</Heading>

        <div className="attract__list">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} alt={name} className="attract__link">
        {name}
      </a>
    </ListItem>
  );
}
