import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AdditionalProperties({
  rules,
  policy,
  transportation,
  languages,
  offers,
}) {
  return (
    <Box className="properties">
      <Heading border>Додаткові властивості</Heading>
      <ul className="properties__list">
        <ListItem title="Правила дому">
          <span>{rules}</span>
        </ListItem>

        <ListItem title="Політика скасування">
          <span>{policy}</span>
        </ListItem>

        <ListItem title="Місцевий транспорт">
          <span>{transportation}</span>
        </ListItem>

        <ListItem title="Мови хоста">
          <span>
            {languages.map((language, index) => (
              <span key={index}>
                {language} {index < languages.length - 1 && ", "}
              </span>
            ))}
          </span>
        </ListItem>

        <ListItem title="Спеціальні пропозиції:">
          <span>{offers}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
