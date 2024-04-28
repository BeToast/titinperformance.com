const FooterBookNowButton: React.FC<{ className?: string }> = ({
   className = "",
}) => {
   return (
      <>
         <div
            className={`${className}  flex content-center justify-center rounded-md bg-red-600 py-8 `}
         >
            <div className="mt-1 px-10 font-euro text-xl text-grey-100">
               BOOK NOW
            </div>
         </div>
      </>
   );
};

export default FooterBookNowButton;
