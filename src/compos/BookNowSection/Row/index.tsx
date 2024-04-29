const Row: React.FC<{
   spaceX?: string;
   children: React.ReactNode;
}> = ({ spaceX = "space-x-16", children }) => {
   return (
      <>
         <div
            className={`${spaceX} flex w-full flex-row content-center justify-center`}
         >
            {children}
         </div>
      </>
   );
};

export default Row;
