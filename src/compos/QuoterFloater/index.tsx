import { quote } from "../../svgs";
import ShadowFrame from "../ShadowFrame";

const componame: React.FC<{}> = ({}) => {
   return (
      <>
         <div
            id="quoter-floater"
            className="absolute top-0 flex w-full origin-center justify-center"
         >
            <ShadowFrame
               className=" max-w-[724px] "
               bodyClassName="relative bg-red-700 flex content-center justify-center w-full "
            >
               <div className="flex flex-col content-center px-32 py-24 font-aver">
                  <div className="pb-4 text-5xl text-greenwhite">
                     I'm amazed.
                  </div>
                  <div className="pb-8 text-lg text-grey-100">
                     I almost forgot what it was like to be headache free.
                  </div>
                  <div>
                     <div className="float-right text-base text-grey-200">
                        Jason Schwartz
                     </div>
                  </div>
               </div>
               {/* QUTOES */}
               <div className="absolute left-4 top-4 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-2">{quote}</div>
                     <div className="w-2">{quote}</div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 rotate-180 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-2">{quote}</div>
                     <div className="w-2">{quote}</div>
                  </div>
               </div>
            </ShadowFrame>
         </div>
      </>
   );
};

export default componame;
