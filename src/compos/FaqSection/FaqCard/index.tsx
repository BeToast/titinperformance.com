import "./style.css";

const FaqCard: React.FC<{
   question: React.ReactNode;
   answer: React.ReactNode;
}> = ({ question, answer }) => {
   return (
      <>
         <div className="faq-card fade-wait relative max-w-prose rounded-md bg-greenwhite p-8">
            <div className="left-red absolute bottom-0 left-0 top-0 w-3 rounded-l-md bg-red-700" />
            <div className="pl-3">
               <div className="pb-2 font-avel text-xl text-grey-950 sm:text-3xl xl:text-4xl 3xl:pb-4 3xl:text-5xl">
                  {question}
               </div>
               <div className="font-aver text-xs text-grey-800 xl:text-sm 3xl:text-lg">
                  {answer}
               </div>
            </div>
         </div>
      </>
   );
};

export default FaqCard;
