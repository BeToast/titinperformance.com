import Logo from "./Logo";
import "./style.css";

const Nav: React.FC<{
   id: string;
   className?: string;
   light: boolean;
}> = ({ id, className, light }) => {
   // const hoverHandler = (e: any, light: boolean) => {
   //    console.log(e.target.classList);
   // };
   return (
      <>
         <div
            id={id}
            className={`${className} ${light ? "light" : "dark"} fixed flex flex-col space-y-8 pl-8 pt-8 font-aver text-sm`}
         >
            <Logo
               leftClass={light ? "fill-grey-200" : "fill-grey-950"}
               rightClass={light ? "fill-grey-200" : "fill-red-600"}
            />
            <div className="nav-book-now">book now</div>
            <div className="nav-reviews">reviews</div>
            <div className="nav-cerficiations">certifications</div>
            <div className="nav-address">address</div>
         </div>
      </>
   );
};

export default Nav;
