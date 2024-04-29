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
               className={`${className} book-now-outer big h-42 w-96 rounded-md bg-red-600 py-14 text-center`}
            >
               <div className="inline-block font-euro text-4xl text-grey-100">
                  BOOK NOW
               </div>
            </div>
         );
         break;

      case "small":
         buttonJsx = (
            <div
               className={`${className} book-now-outer small w-60 rounded-md bg-red-600 py-8 text-center`}
            >
               <div className="inline-block font-euro text-xl text-grey-100 ">
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
               href="https://st3.depositphotos.com/3001967/18881/i/450/depositphotos_188818874-stock-photo-book-appointment-web-interface-button.jpg"
            >
               {buttonJsx}
            </a>
         </div>
      </>
   );
};

export default BookNowButton;
