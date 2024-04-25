// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import waitForElm from "./generic/waitForElm";
import { TITIN } from "./svgs";

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
const rotateRedSlant = (vw: number, vh: number): number => {
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

   let redSlant = document.getElementById("red-slant")!;
   redSlant.style.transform = `rotate(${slantAglRad}rad)`;

   return slantAglRad;
};
//this function takes angle of redslant*(distance from vp center to lukephoto center) to get -y offest from vp center.
const positionLuke = (vw: number, vh: number, slantAglRad: number) => {
   const lukePhotoEl = document.getElementById("luke-photo")!;
   const offest = lukePhotoEl.getBoundingClientRect();
   //adj is the adjacent side of triangle for tanh function
   console.log(offest.left);
   const adj = offest.left + offest.width * 0.5 - vw * 0.5;
   //convert radians to degrees and make positive
   // let slantAglDeg = (-1 * slantAglRad * Math.PI) / 180;
   const yFromVpCenterToLukePhotoCenter = -1 * slantAglRad * adj;
   // console.log(yFromVpCenterToLukePhotoCenter);

   const lukeYPos = vh * 0.5 - yFromVpCenterToLukePhotoCenter;
   // console.log(lukeYPos);
   lukePhotoEl.style.top = `${lukeYPos - offest.height * 0.5}px`;
};
//ran at runtime!
waitForElm("#red-slant").then(() => {
   waitForElm("#luke-photo").then(() => {
      resizeHandler();
   });
});
addEventListener("resize", () => {
   resizeHandler();
});
const resizeHandler = () => {
   let [vw, vh] = getVwVh();
   let slantAglRad = rotateRedSlant(vw, vh);
   positionLuke(vw, vh, slantAglRad);
};

function App() {
   return (
      <>
         <div id="red-slant" />

         <main className="flex justify-center">
            {/* stuff in margins */}
            <div className="w-4/6">
               {/* above the fold */}
               <div className="relative h-screen w-full">
                  <ShadowFrame id="luke-photo" className="h-96 w-96">
                     <div className="absolute right-0 top-4 h-3/5 fill-greenwhite">
                        {TITIN}
                     </div>
                     <img
                        className="h-full w-full object-contain"
                        src="webp/lukePhotoNew.webp"
                     />
                  </ShadowFrame>
               </div>
            </div>
         </main>

         {/* <div className="p-8">
               <div className="font-euro text-5xl">MUST BE or nah CAPS</div>
               <div className="font-aver text-5xl">here is avenir</div>
            </div> */}
      </>
   );
}

export default App;
