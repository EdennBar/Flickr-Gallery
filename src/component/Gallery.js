
import React from "react";

const Gallery = ({ id, image, photo }) => {

  return (
    <div>
      <img  src={image}></img>
    </div>
  );
}

export default Gallery;