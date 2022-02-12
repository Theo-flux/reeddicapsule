import React from "react";
import { Link } from "gatsby";
import "../assets/css/reeddi.css";

export default function Footer() {
  return (
    <footer>
      <div className="w-11/12 mx-auto my-16 flex flex-col gap-y-16 max-w-7xl">
        <div className="flex flex-col flex-wrap gap-10 font-matter sm:flex-row justify-between gap-x-16">
          <div className="bg-white flex flex-col gap-y-4 max-w-[380px] sm:max-w-2xl sm:w-[640px] md:max-w-3xl md:w-[768px] lg:max-w-7xl lg:w-[1020px] xl:max-w-[380px] lg:gap-y-4">
            <div>
              <img src="/Reeddi.png" alt="reeddi" />
            </div>

            <div className="flex flex-col gap-y-8">
              <p className="text-sm text-reeddigrey max-w-[380px]">
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. According to radiometric.
              </p>

              <div className="text-sm text-reeddigrey">
                <p className="m-b-2">
                  <b>Email us:</b> hello@reeddi.com{" "}
                </p>
                <p>
                  <b>Investment relations:</b> investment@reeddi.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 min-w-fit">
            <p>
              <b>Products</b>
            </p>
            <div className="text-sm text-reeddigrey ">
              <p>Reeddi capsule</p>
              <Link to="http://tempown.com/" className="block">
                TempOwn
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 min-w-fit">
            <p>
              <b>The Company</b>
            </p>
            <div className="text-sm text-reeddigrey ">
              <Link to="/about" className="block">
                About
              </Link>
              <Link to="/awards" className="block">
                Awards & Impact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 min-w-fit">
            <p>
              <b>Learn</b>
            </p>
            <div className="text-sm text-reeddigrey ">
              <Link to="/pay-in-installments" className="block">
                How it works
              </Link>
              <Link to="/research" className="block">
                Research
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 min-w-fit">
            <p>
              <b>Contact</b>
            </p>

            <div className="flex flex-col gap-y-8">
              <div className="text-sm  ">
                <p className="text-black">
                  <b>&#127464; Toronto, Canada.</b>
                </p>
                <p className="text-reeddigrey">100 College St Suite 150</p>
                <p className="text-reeddigrey">Toronto, ON M5G 1L5 Canada.</p>
                <p className="text-reeddigrey">Tel: +16474554327</p>
              </div>

              <div className="text-sm">
                <p className="text-black">
                  <b>🇳🇬 Lagos, Nigeria.</b>
                </p>
                <p className="text-reeddigrey">Shell Workspace,</p>
                <p className="text-reeddigrey">
                  44 Bourdillon Road, Ikoyi, Lagos.
                </p>
                <p className="text-reeddigrey">Tel: +2348122888967</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-row font-matter justify-between items center gap-x-20 border-y border-cstm-green py-2">
          <p className="text-sm">2021 Reedd Inc. All Rights Reserved</p>

          <div className="flex justify-between items-center gap-x-4 text-sm">
            <Link to="/terms-of-use">Terms of service</Link>
            <Link to="/policies">Policies</Link>
          </div>

          <div className="flex justify-between items-center gap-x-8">
            <Link to="https://twitter.com/Reeddi">
              <img src="/icons/twitter.svg" alt="twitter" />
            </Link>
            <Link to="https://www.facebook.com/Reeddi/">
              <img src="/icons/facebook.svg" alt="facebook" />
            </Link>
            <Link to="https://www.instagram.com/reeddihq/">
              <img src="/icons/insta.svg" alt="insta" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCdBac6w8Yo4c8r9TB74mNvg">
              <img src="/icons/youtube.svg" alt="youtube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
