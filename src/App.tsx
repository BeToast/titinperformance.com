// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import waitForElm from "./utils/waitForElm";
import resizeHandler from "./utils/resizeHandler";
import { TITIN, TITINperformance } from "./svgs";

import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Nav from "./compos/Nav";
import BookNowSection from "./compos/BookNowSection";
import Certifications from "./compos/Certifications";
import Footer from "./compos/Footer";
import NavTop from "./compos/NavTop";
import Reviews from "./compos/Reviews";
import scrollHandler from "./utils/scrollHander";

function App() {
   var redSlant: HTMLElement;
   var lukePhoto: HTMLElement;
   var slogan: HTMLElement;
   var titinPerformAr: HTMLElement[][] = [new Array(3), new Array(3)]; //0 is wrapper, 1 is above, 2 is text
   var fadeInSet: Set<Element>;

   const [burgerOpen, setBurgerOpen] = useState(false);

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
         resizeHandler(redSlant, lukePhoto, slogan, titinPerformAr);
         addEventListener("resize", () => {
            resizeHandler(redSlant, lukePhoto, slogan, titinPerformAr);
         });
      });

      window.onload = () => {
         fadeInSet = new Set(document.getElementsByClassName("fade-wait"));
         scrollHandler(fadeInSet);
         addEventListener("scroll", () => scrollHandler(fadeInSet));
      };
   });

   return (
      <>
         <HelmetProvider>
            <Helmet>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
               />
               {/* title */}
               <title>Titin Performance</title>
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

         {/* RED SLANT id="" for nav scrolling */}
         <div id="" />
         {/* <div className="w-screen overflow-x-hidden">
            
         </div> */}
         <div className="red-slant-frame absolute -z-30">
            <div className="relative h-screen w-screen overflow-x-hidden">
               <div id="red-slant" className="" />
            </div>
         </div>
         <div id="red-slant-clip" className="absolute h-screen w-screen">
            <Nav id="red-slant-nav" light={true} burgerOpen={burgerOpen} />
         </div>

         {/* WHITE TANGLE */}
         <div id="white-tangle" className="-z-40">
            <div className="flex w-screen justify-center">
               {/* stuff in margins */}
               <div className=" w-10/12 md:w-8/12">
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
         <div id="white-tangle-clip" className="absolute h-screen w-[100vw]">
            <Nav
               id="white-tangle-nav"
               className={"-z-40"}
               light={false}
               burgerOpen={burgerOpen}
            />
         </div>
         {/* heres the nav for the certifications section */}
         <Nav
            id=""
            className={"top-0 -z-60"}
            light={false}
            burgerOpen={burgerOpen}
         />
         {/* <div className="z-70 fixed left-0 top-0 block w-full border-b-[1px] border-grey-600 bg-grey-200 md:hidden">
            <Hamburger
               toggled={burgerOpen}
               color="#0E1114"
               size={28}
               distance="lg"
            />
         </div> */}
         <main id="main" className="flex w-screen flex-wrap justify-center">
            <NavTop setBurgerOpen={setBurgerOpen} />
            {/* stuff in margins */}
            <div className="relative h-screen w-10/12 md:w-8/12">
               {/* above the fold */}
               <div className="relative h-screen">
                  <ShadowFrame
                     borderSize={24}
                     borderSizeSm={32}
                     id="luke-photo"
                     className="absolute left-0 right-0 mx-auto lg:left-auto"
                  >
                     <div className="absolute right-0 top-3 h-3/5 fill-grey-200 sm:top-4">
                        {TITIN}
                     </div>
                     <img
                        className="h-full w-full object-contain"
                        src="webp/lukePhotoNew.webp"
                     />
                  </ShadowFrame>
                  <div
                     id="slogan"
                     className="absolute left-0 mt-4 w-full stroke-grey-50 md:mt-0"
                  >
                     <div className="flex w-full flex-row flex-wrap justify-center text-4xl text-greenwhite md:text-5xl lg:justify-start xl:text-6xl">
                        <div className="pr-1.5 font-avem lg:w-full lg:pr-0">
                           You,
                        </div>
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
            </div>

            <BookNowSection burgerOpen={burgerOpen} />
            <Reviews burgerOpen={burgerOpen} />

            <Certifications />

            <Footer />
         </main>
      </>
   );
}

export default App;
