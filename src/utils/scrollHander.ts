import isElInViewport from "./isElInViewport";

const scrollHandler = (fadeInList: Element[]) => {
   for (let el of fadeInList) {
      if (isElInViewport(el)) {
         el.classList.add("fade-done");
         el.classList.remove("fade-wait");
         // fadeInList.remove(el);
      }
   }

   console.log(fadeInList);
};

export default scrollHandler;
