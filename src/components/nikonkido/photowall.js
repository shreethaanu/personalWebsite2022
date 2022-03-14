import React from "react";


const photos = [
    {
      src: 'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://assets.hongkiat.com/uploads/nature-photography/The-best-nature-photography-collection.jpg',
      width: 1,
      height: 1
    }
  ];
function photowall() {
  return (
    <div className="photowall">
{/* <Gallery photos={photos} />; */}
    </div>
  );
}

export default photowall;
