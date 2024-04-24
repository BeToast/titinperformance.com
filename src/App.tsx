// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import { TITIN } from "./svgs";

function App() {
   return (
      <>
         <div className="red-slant" />

         <main className="">
            {/* stuff in margins */}
            <div className="w-10/12">
               {/* above the fold */}
               <div className="h-screen">
                  <ShadowFrame className="h-96 w-96">
                     <div className="absolute right-0 top-4 h-3/5 fill-greenwhite">
                        {TITIN}
                     </div>
                     <img
                        className=" h-full w-full object-contain"
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
