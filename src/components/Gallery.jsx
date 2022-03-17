import React from "react";
import GalleryConeMobile from "../images/mobile/image-gallery-cone.jpg";
import GalleryMilkbottlesMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import GalleryOrangeMobile from "../images/mobile/image-gallery-orange.jpg";
import GallerySugarCubesMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";

import GalleryConeDesktop from "../images/desktop/image-gallery-cone.jpg";
import GalleryMilkbottlesDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import GalleryOrangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import GallerySugarCubesDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

function Gallery() {
  return (
    <div>
      {/* mobile settings */}
      <div className="xs:flex flex-row sm:hidden">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
            <img src={GalleryMilkbottlesMobile} alt="" />
            <img src={GalleryConeMobile} alt="" />
          </div>
          <div className="flex flex-col w-1/2">
            <img src={GalleryOrangeMobile} alt="" />
            <img src={GallerySugarCubesMobile} alt="" />
          </div>
        </div>
      </div>
      {/* desktop settings */}
      <div className="sm:flex flex-row  xs:hidden">
        <div className="flex flex-row w-[25%]">
          <img src={GalleryMilkbottlesDesktop} alt="" />
          <img src={GalleryOrangeDesktop} alt="" />
          <img src={GalleryConeDesktop} alt="" />
          <img src={GallerySugarCubesDesktop} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
