const ShadowFrame: React.FC<{
   children: React.ReactNode;
   id?: string;
   className?: string;
   bodyClassName?: string;
}> = ({ children, id, className = "", bodyClassName = "bg-red-800" }) => {
   // const shadowWidthPx = whiteWidthPx / 2;
   // const roundedClass = `rounded-[${borderRadiusPx}px]`;
   // https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support
   return (
      <div id={id} className={className}>
         {/* white outline */}
         <div className="relative -z-30 h-full w-full rounded-md border-b-[32px] border-l-[16px] border-r-[32px] border-t-[16px] border-greenwhite bg-greenwhite">
            {/* red main */}
            <div className={`${bodyClassName} -z-10 h-full w-full rounded-md`}>
               {children}
            </div>
            {/* shadow */}
            <div className="absolute left-4 top-4 -z-20 h-full w-full overflow-visible rounded-md bg-grey-950"></div>
         </div>
      </div>
   );
};

export default ShadowFrame;
