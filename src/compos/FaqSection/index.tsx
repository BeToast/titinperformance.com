import Nav from "../Nav";
import FaqCard from "./FaqCard";
import { faqs } from "./FaqCard/faqs";
import "./style.css";

const BookNowSection: React.FC<{ burgerOpen: boolean }> = ({ burgerOpen }) => {
   return (
      <>
         {/* above black background for FAQ header */}
         <div className="faqs-clip relative mt-36 w-10/12 pt-[150px] md:w-8/12">
            <div className="absolute -bottom-[150px] h-[300px] w-10/12 font-euro text-7xl">
               <div className="sticky top-10 font-euro text-7xl">FAQs</div>
            </div>
         </div>
         {/* black background body */}
         <div
            id={"faqs"}
            className="faqs-clip relative min-h-screen w-full bg-grey-950 3xl:min-h-[80vh]"
         >
            <div className="flex h-full w-full justify-center">
               <Nav
                  id=""
                  className={"left-0 top-0"}
                  light={true}
                  burgerOpen={burgerOpen}
               />
               <div className="relative h-full w-10/12 md:w-8/12">
                  {/* the FAQs header */}
                  <div className="absolute -top-[150px] h-[300px] w-10/12">
                     <div className="sticky top-10 font-euro text-7xl text-greenwhite">
                        FAQs
                     </div>
                  </div>
                  {/* Body of FAQ */}
                  <div className="mb-40 mt-[225px] grid grid-cols-1 gap-16 xl:grid-cols-2">
                     {faqs.map((faq, i) => (
                        <FaqCard key={i} question={faq.q} answer={faq.a} />
                     ))}
                  </div>
               </div>
            </div>

            {/* <div className="md:64 h-32 w-screen" /> */}
         </div>
      </>
   );
};

export default BookNowSection;
