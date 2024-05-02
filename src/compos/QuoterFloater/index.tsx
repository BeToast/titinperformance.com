import { quote } from "../../svgs";
import ShadowFrame from "../ShadowFrame";

const componame: React.FC<{}> = ({}) => {
   return (
      <>
         <div
            id="quoter-floater"
            className="flex w-full origin-center justify-center"
         >
            <ShadowFrame
               borderSize={16}
               className=" max-w-[724px]"
               bodyClassName="relative bg-red-700 flex content-center justify-center w-full "
            >
               <div className="fade-wait flex flex-col content-center px-6 py-10 font-aver sm:px-24 sm:py-20 lg:px-32 lg:py-24">
                  <div className="pb-2 text-2xl text-greenwhite sm:pb-4 sm:text-3xl lg:text-5xl">
                     I'm amazed.
                  </div>
                  <div className="pb-4 text-sm text-grey-100 sm:pb-8 sm:text-base lg:text-lg">
                     I almost forgot what it was like to be headache free.
                  </div>
                  <div>
                     <div className="float-right text-xs text-grey-200 sm:text-sm lg:text-base">
                        Jason Schwartz
                     </div>
                  </div>
               </div>
               {/* QUTOES */}
               <div className="absolute left-4 top-4 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-1 sm:w-2">{quote}</div>
                     <div className="w-1 sm:w-2">{quote}</div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 rotate-180 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-1 sm:w-2">{quote}</div>
                     <div className="w-1 sm:w-2">{quote}</div>
                  </div>
               </div>
            </ShadowFrame>
         </div>
      </>
   );
};

export default componame;
