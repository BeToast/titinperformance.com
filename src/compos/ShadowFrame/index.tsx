import "./style.css";

const ShadowFrame: React.FC<{
   children: React.ReactNode;
   id?: string;
   className?: string;
   bodyClassName?: string;
   borderSize?: 32 | 24 | 16;
}> = ({
   children,
   id,
   className = "",
   bodyClassName = "bg-red-800",
   borderSize,
}) => {
   const borderClassesOutline = () => {
      switch (borderSize) {
         case 32:
            return "border-b-[32px] border-l-[16px] border-r-[32px] border-t-[16px]";
         case 24:
            return "border-b-[24px] border-l-[12px] border-r-[24px] border-t-[12px]";
         case 16:
            return "border-b-[16px] border-l-[8px] border-r-[16px] border-t-[8px]";
         default:
            return "border-b-[32px] border-l-[16px] border-r-[32px] border-t-[16px]";
      }
   };
   const borderClassesShadow = () => {
      switch (borderSize) {
         case 32:
            return "left-4 top-4";
         case 24:
            return "left-3 top-3";
         case 16:
            return "left-2 top-2";
         default:
            return "left-4 top-4";
      }
   };

   return (
      <div id={id} className={className}>
         {/* white outline */}
         <div
            className={`white ${borderClassesOutline()} relative z-10 h-full w-full rounded-md border-greenwhite bg-greenwhite`}
         >
            {/* red main */}
            <div
               className={`red ${bodyClassName} z-30 h-full w-full rounded-md`}
            >
               {children}
            </div>
            {/* shadow */}
            <div
               className={`shadow ${borderClassesShadow()} absolute -z-10 h-full w-full overflow-visible rounded-md bg-grey-950`}
            ></div>
         </div>
      </div>
   );
};

export default ShadowFrame;
