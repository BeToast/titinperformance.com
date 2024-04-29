import { logoLeft, logoRight } from "../../../svgs";

const componame: React.FC<{
   className?: string;
   leftClass: string;
   rightClass: string;
}> = ({ className = "", leftClass, rightClass }) => {
   return (
      <div className={`${className} grid w-12 grid-cols-2 grid-rows-1 md:w-16`}>
         <div className={leftClass}>{logoLeft}</div>
         <div className={rightClass}>{logoRight}</div>
      </div>
   );
};

export default componame;
