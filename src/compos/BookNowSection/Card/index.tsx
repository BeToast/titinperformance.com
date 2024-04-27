const Card: React.FC<{ className?: string; title: string; text: string }> = ({
   className = "",
   title,
   text,
}) => {
   return (
      <>
         <div
            className={`${className} relative rounded-b-md rounded-t-lg bg-grey-200`}
         >
            <div className=" inset-x-0 top-0 h-2 w-full rounded-t-md bg-red-700"></div>
            <div className="px-8 py-6">
               <div className="pb-2 font-avel text-4xl text-grey-950">
                  {title}
               </div>
               <div className="font-aver text-sm text-grey-800">{text}</div>
            </div>
         </div>
      </>
   );
};

export default Card;
