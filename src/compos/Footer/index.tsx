import { TITINperformance } from "../../svgs";
import ShadowFrame from "../ShadowFrame";
import BookNowButton from "../BookNowButton";
import "./style.css";
import Nav from "../Nav";

const Footer: React.FC<{ burgerOpen: boolean }> = ({ burgerOpen }) => {
   return (
      <>
         <div id="footer" className="w-full">
            {/* overflow bg */}
            <div className="relative flex w-full justify-center bg-greenwhite">
               {/* nav */}
               <div className="bingus-clip w-full h-full absolute inset-0 bg-transparent">
                  <Nav
                     id=""
                     className={"top-0 z-10"}
                     light={false}
                     burgerOpen={burgerOpen}
                  />
               </div>
               {/* main content */}
               <div className="w-10/12 pt-32 md:w-8/12">
                  <div className="relative flex flex-col space-y-8 font-avem text-sm text-grey-900 sm:text-base lg:text-2xl">
                     {/* book now */}
                     <div className="absolute -top-48 left-0 right-0 z-50 mx-auto text-center sm:left-auto xl:-top-64">
                        <div className="inline-block">
                           <ShadowFrame borderSize={16} borderSize3xl={32}>
                              <BookNowButton
                                 type="big"
                                 className="hidden xl:block"
                              />
                              <BookNowButton
                                 type="small"
                                 className="block xl:hidden"
                              />
                           </ShadowFrame>
                        </div>
                     </div>
                     <a
                        href="tel:760-626-4139"
                        className="fade-wait"
                     >
                        760-626-4139
                     </a>
                     <a
                        href="mailto:TitinPerformance1@gmail.com"
                        target="_blank"
                        className="fade-wait"
                     >
                        titinperformance1@gmail.com
                     </a>
                     <a
                        href="http://maps.apple.com/?address=Titin+Performance+LLC,+410+Roseville+Square+Roseville+CA+95687"
                        target="_blank"
                        className="fade-wait"
                     >
                        410 Roseville Square, Roseville, CA 95678
                        <br />
                        <span className="font-avel text-grey-900 ">
                           - Located inside D1 Training Roseville
                        </span>
                     </a>
                     <div></div>
                  </div>
                  <div className="w-full fill-grey-900 py-32">
                     {TITINperformance}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
