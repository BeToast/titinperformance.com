// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";
import { TITIN } from "./svgs";

function App() {
   return (
      <>
         <div className="red-slant" />

         <main className="flex justify-center">
            {/* stuff in margins */}
            <div className="w-4/6">
               {/* above the fold */}
               <div className="h-screen w-full">
                  <div className=" w-full pt-36">
                     <ShadowFrame className="float-right h-2/5 w-2/5">
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
