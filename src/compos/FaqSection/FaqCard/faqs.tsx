import React from "react";

const emailNode = (
   <a href="mailto:TitinPerformance1@gmail.com" target="_blank" className="">
      titinperformance1@gmail.com
   </a>
);

export const faqs: Array<{ q: React.ReactNode; a: React.ReactNode }> = [
   {
      q: <React.Fragment>What is ART?</React.Fragment>,
      a: (
         <React.Fragment>
            ART utilizes depth, tension, and active movement through a given
            range of motion to promote increased motion, resolve pain, restore
            function, and optimize performance. It is a much more precise
            technique when compared to standard deep tissue and massage
            practices. With ART, we try to find the source of the tightness or
            problem and treat that structure.
         </React.Fragment>
      ),
   },
   {
      q: (
         <React.Fragment>
            How many sessions does it take to see results?
         </React.Fragment>
      ),
      a: (
         <React.Fragment>
            You should already see results after your first session! There
            should be an 80% reduction in symptoms within your first 5 visits,
            depending on what you are seeing me for.
         </React.Fragment>
      ),
   },
   {
      q: <React.Fragment>Is ART right for me?</React.Fragment>,
      a: (
         <React.Fragment>
            An ART session IS NOT a full-body massage. It is fully clothed and
            treats a specific area depending on where the source of the problem
            is.
         </React.Fragment>
      ),
   },
   {
      q: <React.Fragment>What does ART treat?</React.Fragment>,
      a: (
         <React.Fragment>
            ART treats muscle tightness, headaches, back pain , joint pain,
            carpal tunnel syndrome, sciatic pain, and other myofascial
            conditions.
         </React.Fragment>
      ),
   },
   {
      q: (
         <React.Fragment>
            What are your Stretching and Exercise Recommendations?
         </React.Fragment>
      ),
      a: (
         <React.Fragment>
            Stretching and exercise are often neglected when trying to feel and
            move better, pain-free. When you see me during your ART treatment, I
            can give you a couple of stretches and exercises that will help what
            we do during our sessions.{" "}
            <span className="italic">
               I am not a physical therapist or a doctor. All exercises and
               stretches discussed during the session are recommendations only
               and Titin Performance LLC is not responsible for anything that
               happens outside of the session.
            </span>
         </React.Fragment>
      ),
   },
   {
      q: <React.Fragment>Do you offer Exercise Programs?</React.Fragment>,
      a: (
         <React.Fragment>
            As of now, I do not offer full programs. However, I am starting to
            use FMS (Functional Movement Screen) to assess movement for my
            athletic population and give a couple of corrective
            exercises/stretches based on your screen. If you are interested,
            please send me an email at {emailNode} or let me know sometime
            during your ART session.
         </React.Fragment>
      ),
   },
   {
      q: <React.Fragment>How do I contact you?</React.Fragment>,
      a: (
         <React.Fragment>
            Send me an email at {emailNode} and we can set up a 10 - 15 minute
            phone call.
         </React.Fragment>
      ),
   },
];
