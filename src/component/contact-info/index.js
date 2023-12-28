import Heading from "../heading";
import Description from "../description";

import "./index.css";

export default function ContactInfo({ name, image, rate, time, info, phone }) {
  return (
    <div className="info">
      <img src={image} alt="Host" height={80} className="image" />

      <div className="info-part">
        <Heading>Господар - {name}</Heading>

        <div className="info__sub-block ">
          <span className="info__sub-value">{phone}</span>

          <span className="info__sub-value">{time}</span>

          <span className="info__sub-value">{rate}% швидкості відгуку</span>
        </div>
      </div>
      <Description>{info}</Description>
    </div>
  );
}
