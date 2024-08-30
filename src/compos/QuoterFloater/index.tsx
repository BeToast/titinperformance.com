import { quote } from "../../svgs";
import ShadowFrame from "../ShadowFrame";
import QuoterRotor from "./QuoterRotor";

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
               className="w-full md:w-[550px] lg:w-[700px] 4xl:w-[900px]"
               bodyClassName="relative bg-red-700 flex content-center justify-center w-full "
            >
               <div className="fade-wait w-full">
                  <QuoterRotor
                     quoteArray={[
                        {
                           title: "I'm amazed.",
                           body: "I almost forgot what it was like to be headache free.",
                           author: "Jason Schwartz",
                        },
                        {
                           title: undefined,
                           body: "Luke is relaxing muscles from hip to ankles that have long been too tight to allow proper circulation and walking. I feel much more flexible and neuropathy in calves and upper feet has subsided remarkably.",
                           author: "Kathryn D.",
                        },
                        {
                           title: undefined,
                           body: "That this procedure seems to be helping tremendously.",
                           author: "Jean A.",
                        },
                     ]}
                  />
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
