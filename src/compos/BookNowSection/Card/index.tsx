import "./style.css";

const Card: React.FC<{ className?: string; title: string; text: string }> = ({
   className = "",
   title,
   text,
}) => {
   return (
      <>
         <div
            className={`card fade-wait ${className} relative rounded-b-md rounded-t-lg bg-grey-200`}
         >
            <div className="top-red inset-x-0 top-0 h-2 w-full rounded-t-md bg-red-700"></div>
            <div className="px-8 py-6 3xl:px-16 3xl:py-10">
               <div className="pb-2 font-avel text-xl text-grey-950 sm:text-3xl xl:text-4xl 3xl:pb-4 3xl:text-5xl">
                  {title}
               </div>
               <div className="font-aver text-xs text-grey-800 xl:text-sm 3xl:text-lg">
                  {text}
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
