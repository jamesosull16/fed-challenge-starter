import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import "./cards.css";

function Cards({ title, image, image1 }) {
  return (
    <Card className='card'>
      <Image alt={title} src={image} />
      <Card.Content>
        <Image className='thumb' src={image1} />
        <Card.Header className='title'>{title}</Card.Header>
      </Card.Content>
      <Card.Content>
        <a href='#'>VIEW DETAILS</a>
      </Card.Content>
    </Card>
  );
}

export default Cards;
