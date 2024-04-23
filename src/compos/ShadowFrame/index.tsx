const ShadowFrame: React.FC<{
   children: React.ReactNode;
   className?: string;
   whiteWidthPx?: number;
   borderRadiusPx?: number;
}> = ({ children, className = "", whiteWidthPx = 32, borderRadiusPx = 16 }) => {
   const shadowWidthPx = whiteWidthPx / 2;
   const roundedClass = `rounded-[${borderRadiusPx}px]`;

   return (
      //TODO: figure out how to make the outerdiv larger than content and absoutely position 3 squares ontop of earchother
      <div className={`${className} ${roundedClass} overflow-hidden `}>
         {children}
         <div className={`h-full w-full rounded-[${borderRadiusPx}px]`} />
         <div />
      </div>
   );
};

ShadowFrame.defaultProps = {
   whiteWidthPx: 32,
};

export default ShadowFrame;
