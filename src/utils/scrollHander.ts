import isElInViewport from "./isElInViewport";

const scrollHandler = (fadeInSet: Set<Element>) => {
   console.log("crolling");
   if (fadeInSet.size > 0) {
      for (let el of fadeInSet) {
         if (isElInViewport(el)) {
            el.classList.add("fade-done");
            el.classList.remove("fade-wait");
            fadeInSet.delete(el);
         }
      }
   }
};

export default scrollHandler;
