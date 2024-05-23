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
               borderSize3xl={32}
               className=""
               bodyClassName="relative bg-red-700 flex content-center justify-center w-full "
            >
               <div className="fade-wait flex flex-col content-center px-6 py-10 font-aver sm:px-24 sm:py-20 lg:px-32 lg:py-24 3xl:px-48 3xl:py-32">
                  <div className="pb-2 text-2xl text-greenwhite sm:pb-4 sm:text-3xl lg:text-5xl 3xl:text-6xl">
                     I'm amazed.
                  </div>
                  <div className="pb-4 text-sm text-grey-100 sm:pb-8 sm:text-base lg:text-lg 3xl:text-2xl">
                     I almost forgot what it was like to be headache free.
                  </div>
                  <div>
                     <div className="float-right text-xs text-grey-200 sm:text-sm lg:text-base 2xl:text-lg">
                        Jason Schwartz
                     </div>
                  </div>
               </div>
               {/* QUTOES */}
               <div className="absolute left-4 top-4 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-1 sm:w-2 3xl:w-3">{quote}</div>
                     <div className="w-1 sm:w-2 3xl:w-3">{quote}</div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 rotate-180 fill-greenwhite">
                  <div className="flex flex-row space-x-0.5">
                     <div className="w-1 sm:w-2 3xl:w-3">{quote}</div>
                     <div className="w-1 sm:w-2 3xl:w-3">{quote}</div>
                  </div>
               </div>
            </ShadowFrame>
         </div>
      </>
   );
};

export default componame;
