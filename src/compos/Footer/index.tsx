import { TITINperformance } from "../../svgs";
import ShadowFrame from "../ShadowFrame";
import BookNowButton from "../BookNowButton";
import "./style.css";

const Footer: React.FC<{}> = ({}) => {
   return (
      <>
         <div id="footer" className="mt-52 w-full">
            {/* overflow bg */}
            <div className="relative flex w-full justify-center bg-red-700">
               {/* main content */}
               <div className="w-10/12 pt-32 md:w-8/12">
                  <div className="relative flex flex-col space-y-8 font-aver text-base text-grey-200 lg:text-2xl">
                     {/* book now */}
                     <div className="absolute -top-48 left-0 right-0 z-50 mx-auto text-center sm:left-auto">
                        <div className="inline-block">
                           <ShadowFrame borderSize={16}>
                              <BookNowButton type="small" />
                           </ShadowFrame>
                        </div>
                     </div>
                     <a
                        href="mailto:TitinPerformance1@gmail.com"
                        target="_blank"
                        className="fade-wait"
                     >
                        titinperformance1@gmail.com
                     </a>
                     <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="fade-wait"
                     >
                        2371 Iron Point Rd Suite 130, Folsom CA 95630
                        <br />
                        <span className="font-avem text-grey-300 ">
                           - office in Cascade Chiropractic
                        </span>
                     </a>
                     <div></div>
                  </div>
                  <div className="w-full fill-grey-200 py-32">
                     {TITINperformance}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
