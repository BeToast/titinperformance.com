import Logo from "./Logo";
import "./style.css";

const Nav: React.FC<{
   id: string;
   className?: string;
   light: boolean;
}> = ({ id, className, light }) => {
   const lightClass = light ? "light" : "dark";
   return (
      <>
         <div
            id={id}
            className={`${className} ${lightClass} fixed flex flex-col space-y-8 pl-8 pt-8`}
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
            <div className={`${lightClass} nav-address base`}>address</div>
         </div>
      </>
   );
};

export default Nav;
