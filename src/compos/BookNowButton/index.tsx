import "./style.css";

const BookNowButton: React.FC<{
   className?: string;
   type?: "big" | "small";
}> = ({ className = "", type = "big" }) => {
   var buttonJsx: JSX.Element;
   switch (type) {
      case "big":
         buttonJsx = (
            <div
               className={`${className} book-now-outer big h-42 w-96 rounded-md bg-red-600 py-14 text-center 3xl:w-[512px] 3xl:py-24`}
            >
               <div className="inline-block font-euro text-4xl text-grey-100 3xl:text-5xl">
                  BOOK NOW
               </div>
            </div>
         );
         break;

      case "small":
         buttonJsx = (
            <div
               className={`${className} book-now-outer small w-60 rounded-md bg-red-600 py-8 text-center 3xl:w-96 3xl:py-16`}
            >
               <div className="inline-block font-euro text-xl text-grey-100 3xl:text-3xl">
                  BOOK NOW
               </div>
            </div>
         );
         break;
   }
   return (
      <>
         <div className="flex justify-center lg:flex-col">
            <a
               target="_blank"
               href="https://www.massagebook.com/business/24949636/select-product/services/category/Bodywork?ncf_source=friendly_url&src=external"
            >
               {buttonJsx}
            </a>
         </div>
      </>
   );
};

export default BookNowButton;
