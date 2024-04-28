import BookNowButton from "../BookNowButton";
import Card from "./Card";
import "./style.css";

const componame: React.FC<{}> = ({}) => {
   return (
      <>
         <div id="above-book-now" />
         <div id="book-now" className="w-full bg-opacity-50">
            <div className="flex h-full w-full flex-col justify-center space-y-16">
               <div className="card-row">
                  <Card
                     className=""
                     title={"Exercise and Stretching Reccomendations"}
                     text={
                        "a tailored exercise and stretching routine to be your best self"
                     }
                  />
               </div>
               <div className="card-row">
                  <Card
                     className="w-96"
                     title={"ART"}
                     text={
                        "a non-invasive treatment system precisely engineered to locate and quickly resolve soft-tissue discorder"
                     }
                  />
                  <BookNowButton className="grow" />
                  <Card
                     className="w-96"
                     title={"Assesment"}
                     text={
                        "movement, balance, range of motion, strength and other tests to diagnose your specific issue"
                     }
                  />
               </div>
               <div className="card-row">
                  <Card
                     className="w-96"
                     title={"PNF"}
                     text={
                        "a stretching technique utilized to improve muscle elasticity"
                     }
                  />
                  <Card
                     className="w-96"
                     title={"Cupping"}
                     text={
                        "suction is used to increase blood flow enhancing physical performance"
                     }
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default componame;
