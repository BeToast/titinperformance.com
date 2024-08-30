import Logo from "./Logo";
import "./style.css";

const Nav: React.FC<{
   id: string;
   className?: string;
   light: boolean;
   burgerOpen: boolean;
}> = ({ id, className, light, burgerOpen }) => {
   burgerOpen;
   const lightClass = light ? "light" : "dark";
   return (
      <>
         <div id={id}>
            {/* <div className={`${className} fixed block pl-6 pt-6 md:hidden`}>
               <Hamburger
                  toggled={burgerOpen}
                  color={light ? "#EBEDEF" : "#0E1114"}
                  size={28}
                  distance="lg"
               />
            </div> */}
            <div
               className={`${className} ${lightClass} fixed hidden flex-col space-y-8 pl-8 pt-8 font-aver text-sm md:flex 3xl:font-avem 3xl:text-base 4xl:text-lg`}
            >
               <Logo
                  leftClass={light ? "fill-grey-200" : "fill-grey-950"}
                  rightClass={light ? "fill-grey-200" : "fill-red-600"}
               />
               <div className={`${lightClass} nav-book-now base`}>book now</div>
               <div className={`${lightClass} nav-reviews base`}>reviews</div>
               <div className={`${lightClass} nav-certifications base`}>
                  certifications
               </div>
               <div className={`${lightClass} nav-faqs base`}>faqs</div>
               <div className={`${lightClass} nav-address base`}>address</div>
            </div>
         </div>
      </>
   );
};

export default Nav;
