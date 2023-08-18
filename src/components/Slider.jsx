import React, { startTransition } from "react";
// import Slider from "react-slick";

// const Slider = () => {
//   return <div>Slider</div>;
// };

// export default Slider;

import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
  const sliderImages = [];
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={250}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}
