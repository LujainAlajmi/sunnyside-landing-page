import React from "react";
import Emily from "../images/image-emily.jpg";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";

function Testimonials() {
  return (
    <div>
      <div className="xs:flex flex-col w-screen text-center py-10 text-DarkGrayishBlue   bg-[#fefbf8] sm:hidden">
        <h1 className=" uppercase tracking-widest">Client testimonials</h1>
        <div className="flex flex-col items-center py-8">
          <img src={Emily} alt="" className="rounded-full w-20" />
          <p className=" font-[Barlow] px-12 py-7 text-VeryDarkGrayishBlue">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h1 className="text-VeryDarkDesaturatedBlue pb-2">Emily R.</h1>
          <p className="font-[Barlow]  text-xs text-GrayishBlue">
            Marketing Director
          </p>
        </div>
        <div className="flex flex-col items-center py-8">
          <img src={Thomas} alt="" className="rounded-full w-20 " />
          <p className=" font-[Barlow] px-12 py-7 text-VeryDarkGrayishBlue">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h1 className="text-VeryDarkDesaturatedBlue pb-2">Thomas S.</h1>
          <p className="font-[Barlow]  text-xs text-GrayishBlue">
            Chief Operating Officer
          </p>
        </div>
        <div className="flex flex-col items-center py-8">
          <img src={Jennie} alt="" className="rounded-full w-20" />
          <p className=" font-[Barlow] px-12 py-7 text-VeryDarkGrayishBlue">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h1 className="text-VeryDarkDesaturatedBlue pb-2">Jennie F.</h1>
          <p className="font-[Barlow]  text-xs text-GrayishBlue">
            Business Owner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
