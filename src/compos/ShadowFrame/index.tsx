import "./style.css";

const ShadowFrame: React.FC<{
   children: React.ReactNode;
   id?: string;
   className?: string;
   bodyClassName?: string;
   borderSize?: 32 | 24 | 16;
   borderSizeSm?: 32 | 24 | 16;
}> = ({
   children,
   id,
   className = "",
   bodyClassName = "bg-red-800",
   borderSize,
   borderSizeSm = borderSize,
}) => {
   const borderClassesOutline = () => {
      var borderSizeClass: string;
      switch (borderSize) {
         case 32:
            borderSizeClass =
               "border-b-[32px] border-l-[16px] border-r-[32px] border-t-[16px]";
            break;
         case 24:
            borderSizeClass =
               "border-b-[24px] border-l-[12px] border-r-[24px] border-t-[12px]";
            break;
         case 16:
            borderSizeClass =
               "border-b-[16px] border-l-[8px] border-r-[16px] border-t-[8px]";
            break;
         default:
            borderSizeClass =
               "border-b-[32px] border-l-[16px] border-r-[32px] border-t-[16px]";
            break;
      }
      var borderSizeClassSm: string;
      switch (borderSizeSm) {
         case 32:
            borderSizeClassSm =
               "sm:border-b-[32px] sm:border-l-[16px] sm:border-r-[32px] sm:border-t-[16px]";
            break;
         case 24:
            borderSizeClassSm =
               "sm:border-b-[24px] sm:border-l-[12px] sm:border-r-[24px] sm:border-t-[12px]";
            break;
         case 16:
            borderSizeClassSm =
               "sm:border-b-[16px] sm:border-l-[8px] sm:border-r-[16px] sm:border-t-[8px]";
            break;
         default:
            borderSizeClassSm =
               "sm:border-b-[32px] sm:border-l-[16px] sm:border-r-[32px] sm:border-t-[16px]";
            break;
      }
      return `${borderSizeClass} ${borderSizeClassSm}`;
   };
   const borderClassesShadow = () => {
      var borderSizeClass: string;
      switch (borderSize) {
         case 32:
            borderSizeClass = "left-4 top-4";
            break;
         case 24:
            borderSizeClass = "left-3 top-3";
            break;
         case 16:
            borderSizeClass = "left-2 top-2";
            break;
         default:
            borderSizeClass = "left-4 top-4";
            break;
      }
      var borderSizeClassSm: string;
      switch (borderSizeSm) {
         case 32:
            borderSizeClassSm = "sm:left-4 sm:top-4";
            break;
         case 24:
            borderSizeClassSm = "sm:left-3 sm:top-3";
            break;
         case 16:
            borderSizeClassSm = "sm:left-2 sm:top-2";
            break;
         default:
            borderSizeClassSm = "sm:left-4 sm:top-4";
            break;
      }
      return `${borderSizeClass} ${borderSizeClassSm}`;
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
