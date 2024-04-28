var lastScrollTop = window.scrollY || document.documentElement.scrollTop;
export const onScrollHandler = (scrollListeners: HTMLCollectionOf<Element>) => {
   const scrollTop = window.scrollY || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      for (let listener of scrollListeners) {
         listener.classList.add("scrolling-down");
         listener.classList.remove("scrolling-up");
      }
      console.log("down");
   } else if (scrollTop < lastScrollTop) {
      for (let listener of scrollListeners) {
         listener.classList.add("scrolling-up");
         listener.classList.remove("scrolling-down");
      }
      console.log("up");
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

export const scrollEndHandler = (
   scrollListeners: HTMLCollectionOf<Element>,
) => {
   for (let listener of scrollListeners) {
      listener.classList.remove("scrolling-up", "scrolling-down");
   }
   console.log("end");
};
