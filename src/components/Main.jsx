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

          <img src={GlassMobile} alt="glass" className=" object-cover" />
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
      <div className="xs:flex flex-col sm:hidden">
        <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-imageGraphicDesignMobile pb-16 text-center justify-end text-DarkDesaturatedCyan ">
          <h1 className="text-3xl pb-6">Graphic design</h1>
          <p className="font-[Barlow] px-5 ">
            design makes you memorable. We deliver artwork that underscores your
            brand message and captures potential clients’ attention.
          </p>
        </div>
        <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-ImagePhotographyMobile pb-16 text-center justify-end text-DarkBlue">
          <h1 className="text-3xl pb-6">Photography</h1>
          <p className="font-[Barlow] ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
      {/* desktop settings */}
      <div className="sm:flex flex-wrap w-screen xs:hidden">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center  bg-[#fefbf8] py-5 text-left">
            <h1 className="px-32  py-8 text-5xl text-VeryDarkDesaturatedBlue">
              Transform your brand
            </h1>
            <p className="text-lg font-[Barlow] px-32 text-DarkGrayishBlue ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <p className="text-base px-36 py-6 text-VeryDarkDesaturatedBlue uppercase underline  decoration-[5px] decoration-[#fdf1b5] hover:decoration-Yellow">
              <a href="#">Learn more</a>
            </p>
          </div>
          <img src={EggMobile} alt="egg" className=" w-[720px]" />
        </div>

        <div className="flex flex-row ">
          <img src={GlassMobile} alt="glass" className="w-[720px]" />
          <div className="flex flex-col justify-center  bg-[#fefbf8] py-5 text-left">
            <h1 className="px-32 py-5 text-4xl text-VeryDarkDesaturatedBlue">
              Stand out to the right audience
            </h1>
            <p className="text-lg font-[Barlow] px-32 text-DarkGrayishBlue ">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <p className="text-base px-36 py-6 text-VeryDarkDesaturatedBlue uppercase underline  decoration-[5px] decoration-[#faddd2] hover:decoration-SoftRed">
              <a href="#">Learn more</a>
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex flex-row h-screen  xs:hidden">
        <div className="flex flex-col w-1/2 bg-imageGraphicDesignDesktop bg-cover bg-center bg-no-repeat  text-center justify-center text-DarkDesaturatedCyan pt-52">
          <h1 className="text-4xl mt-44">Graphic design</h1>
          <p className="font-[Barlow] text-lg mt-10 px-44">
            design makes you memorable. We deliver artwork that underscores your
            brand message and captures potential clients’ attention.
          </p>
        </div>
        <div className="flex flex-col w-1/2 bg-ImagePhotographyDesktop bg-cover bg-center bg-no-repeat  text-center justify-center text-DarkBlue pt-52">
          <h1 className="text-4xl mt-44">Photography</h1>
          <p className="font-[Barlow] text-lg mt-10 px-44">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
