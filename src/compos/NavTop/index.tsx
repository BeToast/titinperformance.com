import Logo from "../Nav/Logo";

const NavTop: React.FC<{}> = ({}) => {
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
      { text: "book-now", key: 1, href: "#book" },
      { text: "reviews", key: 2, href: "#reviews" },
      { text: "certifications", key: 3, href: "#certifications" },
      { text: "address", key: 4, href: "#footer" },
   ];

   return (
      <>
         <div className="text-transparents fixed left-0 z-50 flex flex-col pl-8 pt-8 font-aver text-sm">
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
      </>
   );
};

export default NavTop;
