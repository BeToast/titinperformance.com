import { TITINperformance } from "../../svgs";
import BookNowButton from "../BookNowButton";
import Nav from "../Nav";
import Card from "./Card";
import Row from "./Row";
import "./style.css";

const BookNowSection: React.FC<{ burgerOpen: boolean }> = ({ burgerOpen }) => {
   return (
      <>
         <div id="book-now" className="bingus-clip -z-50 w-screen bg-grey-950">
            {[...Array(3)].map((_, i) => (
               <div className="w-10/12 fill-transparent md:w-8/12" key={i}>
                  {TITINperformance}
               </div>
            ))}
            <Nav
               id=""
               className={"left-0 top-0 -z-50"}
               light={true}
               burgerOpen={burgerOpen}
            />
         </div>
         <div className="relative -mt-[1px] flex min-h-screen w-full flex-wrap justify-center bg-grey-950 3xl:min-h-[80vh]">
            <div className="bingus-clip flex h-full w-full justify-center">
               <Nav
                  id=""
                  className={"left-0 top-0"}
                  light={true}
                  burgerOpen={burgerOpen}
               />

               <div className=" w-10/12 pt-8 md:w-8/12 md:pt-4 lg:pt-0">
                  <div className="hidden h-full w-full flex-col justify-center space-y-16 md:flex">
                     <Row>
                        <Card
                           className="w-[650px]"
                           title={"Exercise and Stretching Recommendations"}
                           text={
                              "A couple of stretches and exercises to help keep you feeling and moving well during your everyday life."
                           }
                        />
                     </Row>
                     <Row spaceX="space-x-8 2xl:space-x-16">
                        <Card
                           className="w-96 3xl:w-[512px]"
                           title={"ART"}
                           text={
                              "A non-invasive treatment system precisely engineered to locate and quickly resolve soft-tissue discorder."
                           }
                        />
                        <BookNowButton className="hidden 2xl:block" />
                        <Card
                           className="w-96 3xl:w-[512px]"
                           title={"Assessment"}
                           text={
                              "Movement, balance, range of motion, strength and other tests to diagnose your specific issue."
                           }
                        />
                     </Row>
                     <Row>
                        <Card
                           className="w-[650px] 3xl:w-[512px]"
                           title={"PNF"}
                           text={
                              "A stretching technique utilized to improve muscle elasticity."
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
                           "A tailored exercise and stretching routine to be your best self."
                        }
                     />

                     <Card
                        className=""
                        title={"ART"}
                        text={
                           "A non-invasive treatment system precisely engineered to locate and quickly resolve soft-tissue disorder."
                        }
                     />

                     <Card
                        className=""
                        title={"Assesment"}
                        text={
                           "Movement, balance, range of motion, strength and other tests to diagnose your specific issue."
                        }
                     />

                     <Card
                        className=""
                        title={"PNF"}
                        text={
                           "A stretching technique utilized to improve muscle elasticity."
                        }
                     />

                     <BookNowButton className="" type="small" />
                  </div>
               </div>
            </div>
            <div className="md:64 h-32 w-screen" />
         </div>
      </>
   );
};

export default BookNowSection;
