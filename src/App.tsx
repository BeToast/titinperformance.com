// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import waitForElm from "./utils/waitForElm";
import resizeHandler from "./utils/resizeHandler";
import { TITIN, TITINperformance } from "./svgs";

import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Nav from "./compos/Nav";
import BookNow from "./compos/BookNow";

function App() {
   var redSlant: HTMLElement;
   var lukePhoto: HTMLElement;
   var slogan: HTMLElement;
   var titinPerformAr: HTMLElement[][] = [new Array(3), new Array(3)]; //0 is wrapper, 1 is above, 2 is text
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
         //should be combined into a for loop
         waitForElm("#titin-perform-wrapper0").then((titinPerformWrapperEl) => {
            titinPerformAr[0][0] = titinPerformWrapperEl!;
            waitForElm("#above-titin-perform0").then((aboveTitinPerformEl) => {
               titinPerformAr[0][1] = aboveTitinPerformEl!;
               waitForElm("#titin-perform0").then((titinPerformEl) => {
                  titinPerformAr[0][2] = titinPerformEl!;
               });
            });
         }),
         waitForElm("#titin-perform-wrapper1").then((titinPerformWrapperEl) => {
            titinPerformAr[1][0] = titinPerformWrapperEl!;
            waitForElm("#above-titin-perform1").then((aboveTitinPerformEl) => {
               titinPerformAr[1][1] = aboveTitinPerformEl!;
               waitForElm("#titin-perform1").then((titinPerformEl) => {
                  titinPerformAr[1][2] = titinPerformEl!;
               });
            });
         }),
         //end dupilcate code
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
         <HelmetProvider>
            <Helmet>
               {/* title */}
               <title>TITIN PERFORMANCE</title>
               {/* icons */}
               <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="/apple-touch-icon.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon-16x16.png"
               />
               <link rel="manifest" href="/site.webmanifest" />
               <link
                  rel="mask-icon"
                  href="/safari-pinned-tab.svg"
                  color="#5bbad5"
               />
               <meta name="msapplication-TileColor" content="#da532c" />
               <meta name="theme-color" content="#ffffff" />
            </Helmet>
         </HelmetProvider>

         {/* RED SLAND */}
         <div id="red-slant" className="-z-30"></div>
         <div id="red-slant-clip" className="absolute h-screen w-screen">
            <Nav
               id="red-slant-nav"
               className={"text-greenwhite"}
               logoLeftClass={"fill-greenwhite"}
               logoRightClass={"fill-greenwhite"}
            />
         </div>
         {/* WHITE TANGLE */}
         <div id="white-tangle" className="-z-40">
            <div className="flex w-screen justify-center">
               {/* stuff in margins */}
               <div className="w-4/6">
                  {/* above the fold */}
                  <div className="relative h-screen w-full">
                     <div id="titin-perform-wrapper1">
                        <div id="above-titin-perform1" />
                        <div
                           id="titin-perform1"
                           className="sticky fill-grey-950"
                        >
                           {TITINperformance}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="white-tangle-clip" className="absolute h-screen w-[100vh]">
            <Nav
               id="white-tangle-nav"
               className={"-z-40 text-grey-950"}
               logoLeftClass={"fill-grey-950"}
               logoRightClass={"fill-red-600"}
            />
         </div>
         {/* BLACK TANGLE */}
         <div id="black-tangle-frame" className="-z-50">
            <div className="relative h-full w-full">
               <div id="black-tangle" className=""></div>
            </div>
            <div
               id="black-tangle-clip"
               className="absolute top-[100vh] h-[160vh] w-full"
            >
               <Nav
                  id="black-tangle-nav"
                  className={"top-0 text-greenwhite"}
                  logoLeftClass={"fill-greenwhite"}
                  logoRightClass={"fill-greenwhite"}
               />
            </div>
         </div>

         <main className="flex w-screen justify-center">
            {/* stuff in margins */}
            <div className="w-4/6">
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
                  <div id="titin-perform-wrapper0">
                     <div id="above-titin-perform0" />
                     <div
                        id="titin-perform0"
                        className="sticky -z-45 fill-greenwhite"
                     >
                        {TITINperformance}
                     </div>
                  </div>
               </div>

               <BookNow />
            </div>
         </main>
      </>
   );
}

export default App;
