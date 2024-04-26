import Logo from "./Logo";

const Nav: React.FC<{
   id: string;
   className: string;
   logoLeftClass: string;
   logoRightClass: string;
}> = ({ id, className, logoLeftClass, logoRightClass }) => {
   return (
      <>
         <div
            id={id}
            className={`${className} fixed flex flex-col space-y-8 pl-8 pt-8 font-aver text-sm`}
         >
            <Logo leftClass={logoLeftClass} rightClass={logoRightClass} />
            <div>book now</div>
            <div>reviews</div>
            <div>certifications</div>
            <div>address</div>
         </div>
      </>
   );
};

export default Nav;
