import BookNowButton from "../BookNowButton";
import Card from "./Card";
import Row from "./Row";
const componame: React.FC<{}> = ({}) => {
   return (
      <>
         <div id="above-book-now" />
         <div id="book-now" className="relative w-full pt-8 md:pt-4 lg:pt-0 ">
            <div className="hidden h-full w-full flex-col justify-center space-y-16 md:flex">
               <Row>
                  <Card
                     className=""
                     title={"Exercise and Stretching Reccomendations"}
                     text={
                        "a tailored exercise and stretching routine to be your best self"
                     }
                  />
               </Row>
               <Row spaceX="space-x-8 2xl:space-x-16">
                  <Card
                     className="w-96"
                     title={"ART"}
                     text={
                        "a non-invasive treatment system precisely engineered to locate and quickly resolve soft-tissue discorder"
                     }
                  />
                  <BookNowButton className="hidden 2xl:block" />
                  <Card
                     className="w-96"
                     title={"Assesment"}
                     text={
                        "movement, balance, range of motion, strength and other tests to diagnose your specific issue"
                     }
                  />
               </Row>

               <Row>
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
               </Row>

               <Row>
                  <BookNowButton className="block 2xl:hidden" />
               </Row>
            </div>

            {/* for < medium screens :) */}
            <div className="flex h-full w-full flex-col space-y-8 md:hidden">
               <Card
                  className=""
                  title={"Exercise and Stretching Reccomendations"}
                  text={
                     "a tailored exercise and stretching routine to be your best self"
                  }
               />

               <Card
                  className=""
                  title={"ART"}
                  text={
                     "a non-invasive treatment system precisely engineered to locate and quickly resolve soft-tissue discorder"
                  }
               />

               <Card
                  className=""
                  title={"Assesment"}
                  text={
                     "movement, balance, range of motion, strength and other tests to diagnose your specific issue"
                  }
               />

               <Card
                  className=""
                  title={"PNF"}
                  text={
                     "a stretching technique utilized to improve muscle elasticity"
                  }
               />
               <Card
                  className=""
                  title={"Cupping"}
                  text={
                     "suction is used to increase blood flow enhancing physical performance"
                  }
               />

               <BookNowButton className="" type="small" />
            </div>
         </div>
      </>
   );
};

export default componame;
