import React from "react";
import EggMobile from "../images/mobile/image-transform.jpg";
import GlassMobile from "../images/mobile/image-stand-out.jpg";
function Main() {
  return (
    // mobile settings
    <div>
      <div className="xs:flex w-screen sm:hidden">
        <div className="flex flex-col">
          <img src={EggMobile} alt="egg" className=" object-cover" />
          <div className="flex flex-col text-center justify-center  bg-[#fefbf8] py-5">
            <h1 className="px-5 py-5 text-3xl text-VeryDarkDesaturatedBlue">
              Transform your brand
            </h1>
            <p className="text-lg font-[Barlow] px-6 text-DarkGrayishBlue ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <p className="text-base py-6 text-VeryDarkDesaturatedBlue uppercase underline  decoration-[5px] decoration-[#fdf1b5] hover:decoration-Yellow">
              <a href="#">Learn more</a>
            </p>
          </div>

          <img src={GlassMobile} alt="egg" className=" object-cover" />
          <div className="flex flex-col text-center justify-center  bg-[#fefbf8] py-5">
            <h1 className="px-8 py-5 text-3xl text-VeryDarkDesaturatedBlue">
              Stand out to the right audience
            </h1>
            <p className="text-lg font-[Barlow] px-6 text-DarkGrayishBlue ">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <p className="text-base py-6 text-VeryDarkDesaturatedBlue uppercase underline  decoration-[5px] decoration-[#faddd2] hover:decoration-SoftRed">
              <a href="#">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
