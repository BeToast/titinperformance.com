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
         <div className="relative h-[300px] w-[700px] px-6 py-10 font-aver sm:px-24 sm:py-20 lg:px-32 lg:py-24 3xl:px-48 3xl:py-32 4xl:h-[450px] 4xl:w-[900px]">
            {quoters}
         </div>
      </>
   );
};

export default QuoterRotor;
