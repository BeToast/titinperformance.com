const BookNowButton: React.FC<{ className: string }> = ({ className }) => {
   return (
      <>
         <div
            className={`${className}  flex min-w-96 content-center justify-center rounded-md bg-red-600 py-14 `}
         >
            <div className="text-grey-100 mt-1 font-euro text-4xl">
               BOOK NOW
            </div>
         </div>
      </>
   );
};

export default BookNowButton;
