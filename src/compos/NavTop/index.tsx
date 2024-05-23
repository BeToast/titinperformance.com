import Logo from "../Nav/Logo";
import { Divide as Hamburger } from "hamburger-react";

const NavTop: React.FC<{
   setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setBurgerOpen }) => {
   const mouseOverHandler = (el: HTMLElement) => {
      const navButtons = document.getElementsByClassName(el.id);
      for (let button of navButtons) {
         button.classList.add("hovered");
      }
   };
   const mouseOutHandler = (el: HTMLElement) => {
      const navButtons = document.getElementsByClassName(el.id);
      for (let button of navButtons) {
         button.classList.remove("hovered");
      }
   };

   const navEl = (obj: { text: string; key: number; href: string }) => {
      return (
         <>
            <a href={obj.href}>
               <div
                  key={obj.key}
                  id={`nav-${obj.text}`}
                  className="cursor-pointer py-4 text-transparent"
                  onMouseOver={(el) =>
                     mouseOverHandler(el.target as HTMLElement)
                  }
                  onMouseOut={(el) => mouseOutHandler(el.target as HTMLElement)}
               >
                  {obj.text}
               </div>
            </a>
         </>
      );
   };
   const navElArray: {
      text: string;
      key: number;
      href: string;
   }[] = [
      { text: "book-now", key: 1, href: "#book-now" },
      { text: "reviews", key: 2, href: "#reviews" },
      { text: "certifications", key: 3, href: "#certifications" },
      { text: "address", key: 4, href: "#footer" },
   ];

   return (
      <>
         <div className="fixed left-0 z-50 pl-8 pt-8">
            <div className="block md:hidden">
               <Hamburger
                  color={"transparent"}
                  size={28}
                  distance="lg"
                  onToggle={(toggled) => setBurgerOpen(toggled)}
               />
            </div>
            <div className="hidden flex-col font-aver text-sm text-transparent md:flex xl:font-avem 3xl:text-base 4xl:text-lg">
               <a href="#">
                  <Logo
                     key={0}
                     className="mb-4"
                     leftClass="fill-transparent"
                     rightClass="fill-transparent"
                  />
               </a>
               {navElArray.map((obj) => navEl(obj))}
            </div>
         </div>
      </>
   );
};

export default NavTop;
