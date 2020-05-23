import React from "react";
import { Grid } from "semantic-ui-react";
import mercedesImg from "../images/mercedesAd.jpg";
import lagavulinImg from "../images/lagavulinAd.jpg";

const Ad = ({ type }) => {
  const adList = [
    {
      id: "ad-1",
      href: "https://www.mercedes-benz.com/en/",
      img: mercedesImg,
      alt: "mercedes",
    },
    {
      id: "ad-2",
      href: "https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/",
      img: lagavulinImg,
      alt: "lagavulin",
    },
  ];

  return (
    <Grid.Row width={3} centered>
      <a id={adList[type].id} href={adList[type].href}>
        <img src={adList[type].img} alt={adList[type].alt} />
      </a>
    </Grid.Row>
  );
};

export default Ad;
