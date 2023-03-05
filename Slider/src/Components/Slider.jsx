import SimpleImageSlider from "react-simple-image-slider";
import { images } from "./imagesData";

const Slider = () => {
  return (
    <div className="slider_div">
      <SimpleImageSlider
        width={800}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export { Slider };
