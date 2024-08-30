import { useEffect } from "react";
import Quoter from "./Quoter";

const QuoterRotor: React.FC<{
   quoteArray: Array<{ title?: string; body: string; author: string }>;
}> = ({ quoteArray }) => {
   var quoterIndex = 0;

   const quoterLoop = () => {
      //call this function again in 4 sectiods
      window.setTimeout(() => quoterLoop(), 10000);

      //hide previous quoter
      var prevQuoterIndex = Math.abs((quoterIndex - 1) % quoteArray.length);
      document
         .getElementById(`quoter-${prevQuoterIndex}`)!
         .classList.remove("shown");

      //show next quoter after one second
      window.setTimeout(() => {
         document
            .getElementById(`quoter-${quoterIndex % quoteArray.length}`)!
            .classList.add("shown");
         //increment quoter index
         quoterIndex++;
      }, 1000);
   };
   useEffect(() => {
      quoterLoop();
   });

   const quoters = quoteArray.map((quote, index) => (
      <Quoter
         id={`quoter-${index}`}
         content={{
            title: quote.title,
            body: quote.body,
            author: quote.author,
         }}
      />
   ));
   75;
   return (
      <>
         {/* widths are defined on shadowframe's parent in QuoterFloater */}
         <div className="relative h-[275px] w-full font-aver sm:h-[300px] md:h-[300px] lg:h-[300px] 4xl:h-[450px]">
            {quoters}
         </div>
      </>
   );
};

export default QuoterRotor;
