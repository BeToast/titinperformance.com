import Nav from "../Nav";
import QuoterFloater from "../QuoterFloater";
import "./style.css";

const componame: React.FC<{ burgerOpen: boolean }> = ({ burgerOpen }) => {
   return (
      <div
         id="reviews"
         className="relative flex h-[40vh] w-full justify-center py-64 lg:h-[60vh]"
      >
         <div
            id="black-clip-new"
            className="absolute right-[-1px] top-[-1px] h-full w-[101%]"
         >
            <Nav
               id=""
               className={"fixed left-0 top-0"}
               light={true}
               burgerOpen={burgerOpen}
            />
         </div>
         <div className="flex w-10/12 flex-col justify-center md:w-8/12">
            <QuoterFloater />
         </div>
      </div>
   );
};

export default componame;
