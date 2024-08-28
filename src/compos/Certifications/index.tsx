import Cert from "./Cert";

const Certifications: React.FC<{}> = ({}) => {
   return (
      <>
         <div className="flex w-full justify-center">
            <div
               id="certifications"
               className="flex w-10/12 flex-col space-y-10 pt-[10vh] md:w-8/12"
            >
               <Cert
                  title="Massage Therapist"
                  where="California Massage Therapy Council"
                  logoSrc="webp/certificationWebp/massage.webp"
               />
               <Cert
                  title="FMS level 1 and 2 Certified"
                  where="Functional Movement Systems, LLC"
                  logoSrc="webp/certificationWebp/FMS.webp"
               />
               <Cert
                  title="Bachelors of Exercise Science"
                  where="Grand Canyon University"
                  logoSrc="webp/certificationWebp/GCU.webp"
               />
               <Cert
                  title="Corrective Exercise Specialist"
                  where="National Academy of Sports Medicine"
                  logoSrc="webp/certificationWebp/CorrectiveExercise.webp"
               />
               <Cert
                  title="Active Release Techniques Provider"
                  subTitle="full body level 1 and nerve certified"
                  where="Active Release Techniques, LLC"
                  logoSrc="webp/certificationWebp/art.webp"
               />
               <Cert
                  title="Strength and Conditioning Specialist"
                  where="National Strength and Conditioning Association"
                  logoSrc="webp/certificationWebp/strengthCondition.webp"
               />
               <Cert
                  title="Myofascial Network Release Expert II"
                  where="Myofascial Release Treatment Centers & Seminars"
                  logoSrc=""
               />
            </div>
         </div>
      </>
   );
};

export default Certifications;
