// import { useState } from "react";
import "./App.css";
import ShadowFrame from "./compos/ShadowFrame";

function App() {
   return (
      <>
         <div className="red-slant" />

         <ShadowFrame className="h-72 w-72 bg-red-800">
            <p className="font-euro text-5xl">MUST BE or nah CAPS</p>
            <p className="font-aver text-5xl">here is avenir</p>
         </ShadowFrame>
      </>
   );
}

export default App;
