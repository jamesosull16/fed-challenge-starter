import React, { useState } from "react";
import { Card} from "semantic-ui-react";
import images from "../images";
import Cards from "../Cards/Cards";
import Wrapper from "../components/Wrapper/Wrapper"

function CardPage() {
  const [stateImages] = useState(images);

  return (
    <>
      <Wrapper>
        <Card.Group itemsPerRow={4}>
          {images.map((image) => (
            <Cards
              key={image.id}
              title={image.title}
              image={image.image}
              image1={image.image1}
              
            />
          ))}
        </Card.Group>
      </Wrapper>
    </>
  );
}

export default CardPage;
