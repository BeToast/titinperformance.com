// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import waitForElm from "./generic/waitForElm";
import { TITIN, TITINperformance } from "./svgs";

import { useEffect } from "react";

const getVwVh = (): [number, number] => {
   return [
      Math.max(
         document.documentElement.clientWidth || 0,
         window.innerWidth || 0,
      ),
      Math.max(
         document.documentElement.clientHeight || 0,
         window.innerHeight || 0,
      ),
   ];
};

// for red slant rotation
const rotateRedSlant = (
   redSlant: HTMLElement,
   vw: number,
   vh: number,
): number => {
   let tanhInput;
   //if landscape
   if (vw > vh) {
      //red slant has angled spans middle 60% of vh
      tanhInput = (vh * 0.6) / vw;
   } //if portrait
   else {
      //red slant has angled spans middle 40% of vh
      tanhInput = (vh * 0.4) / vw;
   }
   // console.log(tanhInput);
   // console.log(`tangent: ${Math.tan(tanhInput)}`);

   //slantAglRad is short for redSlantAngleRadians
   let slantAglRad = -1 * Math.tanh(tanhInput);

   redSlant.style.transform = `rotate(${slantAglRad}rad)`;
   //return angle for positionLuke()
   return slantAglRad;
};
//this function takes angle of redslant*(distance from vp center to lukephoto center) to get -y offest from vp center.
const positionLuke = (
   lukePhoto: HTMLElement,
   vw: number,
   vh: number,
   slantAglRad: number,
): DOMRect => {
   const lukeOffset = lukePhoto.getBoundingClientRect();
   //adj is the adjacent side of triangle for tanh function
   const adj = lukeOffset.left + lukeOffset.width * 0.5 - vw * 0.5;
   //y distance from view center to luke photo center
   const yFromVpCenterToLukePhotoCenter = -1 * slantAglRad * adj;
   //calculate the y pos of luke with angle and adjactent to find opposite
   const lukeYPos = vh * 0.5 - yFromVpCenterToLukePhotoCenter;
   //position luke
   lukePhoto.style.top = `${lukeYPos - lukeOffset.height * 0.5}px`;
   //return lukeOffset for slogan positioning
   return lukeOffset;
};
//postition slogan relative to luke
const positionSlogan = (
   slogan: HTMLElement,
   vw: number,
   vh: number,
   slantAglRad: number,
) => {
   const sloganOffset = slogan.getBoundingClientRect();
   //solving for height of redslant at left of content area. so we can center slogan vertically
   //adj of tanh function
   const adj = vw * 0.5 - sloganOffset.left;
   //solve for opposite side length with tanh.
   const yFromVpCenterBottomOfRedSlant = -1 * slantAglRad * adj;

   const redSlantHeightAtLeft = vh * 0.5 + yFromVpCenterBottomOfRedSlant;

   slogan.style.top = `${redSlantHeightAtLeft * 0.5 - sloganOffset.height * 0.5}px`;

   // slogan.style.top = `${lukeOffset.top + lukeOffset.height * 0.5 - sloganOffset.height * 0.5}px`;
};

const positionTitinPerform = (
   titinPerformAr: HTMLElement[],
   vh: number,
   slantAglRad: number,
) => {
   //get height of text
   const titinPerformOffset = titinPerformAr[2].getBoundingClientRect();
   //set top value for sticky position to work, its the same space as text height
   titinPerformAr[2].style.top = `${titinPerformOffset.height}px`;
   //get additional whitespace above text to red using angle
   const extraWhitespace = -1 * slantAglRad * titinPerformOffset.left;
   //set height of above-titin-perform, concequetnly position the text.
   const aboveTitinPerformHeight =
      vh * 0.9 - titinPerformOffset.height * 0.5 - extraWhitespace * 0.5;
   titinPerformAr[1].style.height = `${aboveTitinPerformHeight}px`;

   //calc additional height to take up in black-tangle
   const spaceInBlackTangle = vh - aboveTitinPerformHeight;
   titinPerformAr[0].style.height = `${vh + spaceInBlackTangle}px`;
};

const positionBlackTangle = (blackTangle: HTMLElement, slantAglRad: number) => {
   blackTangle.style.transform = `rotate(${slantAglRad}rad)`;
};

const resizeHandler = (
   redSlant: HTMLElement,
   lukePhoto: HTMLElement,
   slogan: HTMLElement,
   titinPerformAr: HTMLElement[],
   blackTangle: HTMLElement,
) => {
   const [vw, vh] = getVwVh();
   const slantAglRad = rotateRedSlant(redSlant, vw, vh);
   // const lukeOffset = positionLuke(lukePhoto, vw, vh, slantAglRad);
   positionLuke(lukePhoto, vw, vh, slantAglRad);
   positionSlogan(slogan, vw, vh, slantAglRad);
   positionTitinPerform(titinPerformAr, vh, slantAglRad);
   positionBlackTangle(blackTangle, slantAglRad);
};

function App() {
   var redSlant: HTMLElement;
   var lukePhoto: HTMLElement;
   var slogan: HTMLElement;
   var titinPerformAr: HTMLElement[] = new Array(3); //0 is wrapper, 1 is above, 2 is text
   var blackTangle: HTMLElement;

   useEffect(() => {
      //execute all useEffect promises in parallel
      Promise.all([
         waitForElm("#red-slant").then((redSlantEl: HTMLElement | null) => {
            redSlant = redSlantEl!;
         }),
         waitForElm("#luke-photo").then((lukePhotoEl: HTMLElement | null) => {
            lukePhoto = lukePhotoEl!;
         }),
         waitForElm("#slogan").then((sloganEl: HTMLElement | null) => {
            slogan = sloganEl!;
         }),
         waitForElm("#black-tangle").then(
            (blackTangleEl: HTMLElement | null) => {
               blackTangle = blackTangleEl!;
            },
         ),
         waitForElm("#titin-perform-wrapper").then((titinPerformWrapperEl) => {
            titinPerformAr[0] = titinPerformWrapperEl!;
            waitForElm("#above-titin-perform").then((aboveTitinPerformEl) => {
               titinPerformAr[1] = aboveTitinPerformEl!;
               waitForElm("#titin-perform").then((titinPerformEl) => {
                  titinPerformAr[2] = titinPerformEl!;
               });
            });
         }),
      ]).then(() => {
         resizeHandler(
            redSlant,
            lukePhoto,
            slogan,
            titinPerformAr,
            blackTangle,
         );
         addEventListener("resize", () => {
            resizeHandler(
               redSlant,
               lukePhoto,
               slogan,
               titinPerformAr,
               blackTangle,
            );
         });
      });
   });

   return (
      <>
         <title>Titin Performance</title>

         <div id="red-slant" className="-z-30" />
         <div id="white-tangle" className="-z-40"></div>
         <div id="black-tangle-frame" className="-z-50">
            <div className="relative h-full w-full">
               <div id="black-tangle" className=""></div>
            </div>
         </div>

         <main className="flex justify-center">
            {/* stuff in margins */}
            <div id="main-margin" className="w-4/6">
               {/* above the fold */}
               <div className="relative h-screen w-full">
                  <ShadowFrame id="luke-photo" className="absolute right-0">
                     <div className="absolute right-0 top-4 h-3/5 fill-red-600 opacity-60">
                        {TITIN}
                     </div>
                     <img
                        className="h-full w-full object-contain"
                        src="webp/lukePhotoNew.webp"
                     />
                  </ShadowFrame>
                  <div id="slogan" className="absolute left-0 stroke-grey-50">
                     <div className="flex flex-row flex-wrap space-x-2 text-6xl text-greenwhite">
                        <div className="font-avem md:w-full ">You,</div>
                        <div className="font-aver">at your best.</div>
                     </div>
                  </div>
                  <div id="titin-perform-wrapper" className="">
                     <div id="above-titin-perform" />
                     <div
                        id="titin-perform"
                        className=" sticky fill-greenwhite"
                     >
                        {TITINperformance}
                     </div>
                  </div>

                  {/* <div className="titin-perform-wrapper">
                     <div className="above-titin-perform" />
                     <div className="titin-perform sticky fill-greenwhite">
                        {TITINperformance}
                     </div>
                  </div> */}
               </div>
            </div>
         </main>
      </>
   );
}

export default App;
