import "./style.css";

const Quoter: React.FC<{
   id: string;
   content: { title?: string; body: string; author: string };
}> = ({ id, content }) => {
   return (
      <>
         <div
            id={id}
            className="quoter absolute inset-16 flex flex-col content-center"
         >
            {content.title ? (
               <div className="pb-2 text-2xl text-greenwhite sm:pb-4 sm:text-3xl lg:text-5xl 3xl:text-6xl">
                  {content.title}
               </div>
            ) : (
               <></>
            )}
            <div className="grow pb-4 text-sm text-grey-100 sm:pb-8 sm:text-base lg:text-lg 3xl:text-2xl">
               {content.body}
            </div>
            <div>
               <div className="float-right text-xs text-grey-200 sm:text-sm lg:text-base 2xl:text-lg">
                  {content.author}
               </div>
            </div>
         </div>
      </>
   );
};

export default Quoter;
