import "./style.css";

const Cert: React.FC<{
   title: string;
   where: string;
   logoSrc?: string;
}> = ({ title, where, logoSrc }) => {
   return (
      <>
         <div className="cert flex flex-row space-x-2">
            <div className="flex grow flex-col justify-start space-y-1">
               <div className="bg-grey-100 flex h-10 flex-row justify-end">
                  <div className="pl-6 font-avel text-3xl text-grey-900">
                     {title}
                  </div>
                  <div className="empty-grow"></div>
               </div>

               <div className="cert-line h-[3px] bg-red-700"></div>
               <div className="bg-grey-100 h-10">
                  <div className="float-right">
                     <div className="font-avel text-xl text-grey-800">
                        {where}
                     </div>
                  </div>
               </div>
            </div>
            <div className="h-24 w-24 grow-0 rounded-full bg-transparent">
               <img src={logoSrc} />
            </div>
         </div>
      </>
   );
};

export default Cert;
