import "./style.css";

const Cert: React.FC<{
   title: string;
   where: string;
   logoSrc?: string;
}> = ({ title, where, logoSrc }) => {
   return (
      <>
         {/* sm: */}
         <div className="cert hidden flex-row space-x-2 pl-0 sm:flex md:pl-8 lg:pl-0">
            <div className="flex grow flex-col justify-start space-y-1 pt-2">
               <div className="flex h-6 flex-row justify-end lg:h-10">
                  <div className="cursor-default pl-6 font-avel text-xl text-grey-900 lg:text-3xl">
                     {title}
                  </div>
                  <div className="empty-grow"></div>
               </div>

               <div className="cert-line h-[3px] bg-red-700"></div>
               <div className="relative h-6 lg:h-10">
                  <div className="cert-where-hide absolute right-0 z-10 h-full bg-greenwhite"></div>
                  <div className="absolute right-0.5 top-0 z-0 cursor-default font-avel text-base text-grey-800 lg:text-xl">
                     {where}
                  </div>
               </div>
            </div>
            <div className="cert-logo -mt-[1.5px] h-20 w-20 grow-0 rounded-full bg-transparent lg:h-24 lg:w-24">
               <img src={logoSrc} />
            </div>
         </div>

         {/* < sm: */}
         <div className="flex flex-row items-center space-x-2 pl-0 sm:hidden">
            <div className="relative flex grow flex-col content-center justify-start space-y-1">
               <div className="xs:text-lg cursor-default font-avel text-base text-grey-900">
                  {title}
               </div>
               <div className="h-0.5 w-full bg-red-700"></div>
               <div className="xs:text-lg relative cursor-default font-avel text-base text-transparent">
                  {title}
                  <div className="xs:text-sm absolute inset-0 cursor-default font-avel text-xs text-grey-800">
                     {where}
                  </div>
               </div>
            </div>
            {logoSrc ? (
               <div className="-mt-[1.5px] h-20 w-20 shrink-0 grow-0 rounded-full bg-transparent">
                  <img src={logoSrc} />
               </div>
            ) : (
               <></>
            )}
         </div>
      </>
   );
};

export default Cert;
