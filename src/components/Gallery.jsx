import React from "react";

function Gallery() {
  return (
    <div>
      {/* mobile settings */}
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
    </div>
  );
}

export default Gallery;
