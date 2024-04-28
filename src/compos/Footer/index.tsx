import { TITINperformance } from "../../svgs";
import "./style.css";

const Footer: React.FC<{}> = ({}) => {
   return (
      <>
         <div className="relative mt-52">
            <div className="footer-bg absolute -z-10 h-full w-screen bg-red-700"></div>
            <div className="w-full bg-red-700 pt-32">
               <div className="flex flex-col space-y-8 font-aver text-xl text-grey-200">
                  <a href="mailto:TitinPerformance1@gmail.com" target="_blank">
                     TitinPerformance1@gmail.com
                  </a>
                  <a
                     href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                     target="_blank"
                  >
                     2371 Iron Point Rd Suite 130, Folsom CA 95630
                  </a>
                  <div></div>
               </div>
               <div className="w-full fill-grey-200 py-32">
                  {TITINperformance}
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
