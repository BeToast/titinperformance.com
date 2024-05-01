const getVwVh = (): [number, number] => {
   return [
      Math.max(
         document.documentElement.clientWidth || 0,
         window.innerWidth || 0,
      ),
      Math.max(
         document.documentElement.clientHeight || 0,
         window.innerHeight || 0,
      ),
   ];
};

// for red slant rotation
const rotateRedSlant = (
   redSlant: HTMLElement,
   vw: number,
   vh: number,
): number => {
   let tanhInput;
   //if landscape
   if (vw >= 1025) {
      //red slant has angled spans middle 60% of vh
      tanhInput = (vh * 0.6) / vw;
   } //if portrait
   else {
      //red slant has angled spans middle 40% of vh
      tanhInput = (vh * 0.4) / vw;
   }
   // console.log(tanhInput);
   // console.log(`tangent: ${Math.tan(tanhInput)}`);

   //slantAglRad is short for redSlantAngleRadians
   let slantAglRad = -1 * Math.tanh(tanhInput);

   redSlant.style.transform = `rotate(${slantAglRad}rad)`;

   //return angle for positionLuke()
   return slantAglRad;
};
//this function takes angle of redslant*(distance from vp center to lukephoto center) to get -y offest from vp center.
const positionLuke = (
   lukePhoto: HTMLElement,
   vw: number,
   vh: number,
   slantAglRad: number,
): DOMRect => {
   const lukeOffset = lukePhoto.getBoundingClientRect();
   if (vw >= 1025) {
      //adj is the adjacent side of triangle for tanh function
      const adj = lukeOffset.left + lukeOffset.width * 0.5 - vw * 0.5;
      //y distance from view center to luke photo center
      const yFromVpCenterToLukePhotoCenter = -1 * slantAglRad * adj;
      //calculate the y pos of luke with angle and adjactent to find opposite
      const lukeYPos = vh * 0.5 - yFromVpCenterToLukePhotoCenter;
      //position luke
      lukePhoto.style.top = `${lukeYPos - lukeOffset.height * 0.5}px`;
      //return lukeOffset for slogan positioning
   } else {
      lukePhoto.style.top = `${vh * 0.5 - lukeOffset.height * 0.5}px`;
   }

   return lukeOffset;
};
//postition slogan relative to luke
const positionSlogan = (
   slogan: HTMLElement,
   vw: number,
   vh: number,
   slantAglRad: number,
) => {
   const sloganOffset = slogan.getBoundingClientRect();
   if (vw >= 1025) {
      //solving for height of redslant at left of content area. so we can center slogan vertically
      //adj of tanh function
      const adj = vw * 0.5 - sloganOffset.left;
      //solve for opposite side length with tanh.
      const yFromVpCenterBottomOfRedSlant = -1 * slantAglRad * adj;

      const redSlantHeightAtLeft = vh * 0.5 + yFromVpCenterBottomOfRedSlant;

      slogan.style.top = `${redSlantHeightAtLeft * 0.5 - sloganOffset.height * 0.5}px`;
   } else {
      slogan.style.top = `${vh * 0.15 - sloganOffset.height * 0.5}px`;
   }
};

const positionTitinPerform = (
   titinPerformArAr: HTMLElement[][], //0 is wrapper, 1 is above, 2 is text
   vh: number,
   slantAglRad: number,
): number => {
   //get height of text
   var titinPerformOffset = titinPerformArAr[0][2].getBoundingClientRect();
   //get additional whitespace above text to red using angle
   var extraWhitespace = -1 * slantAglRad * titinPerformOffset.left;
   //calc height of above-titin-perform
   var aboveTitinPerformHeight =
      vh * 0.9 - titinPerformOffset.height * 0.5 - extraWhitespace * 0.5;
   //calc height of the wrapper to overflowinto blacktangle
   // var spaceInBlackTangle = vh - aboveTitinPerformHeight;

   titinPerformArAr.map((titinPerformAr) => {
      //set top value for sticky position to work, its the same space as text height
      titinPerformAr[2].style.top = `${titinPerformOffset.height}px`;

      //set height of above-titin-perform, concequetnly position the text.
      titinPerformAr[1].style.height = `${aboveTitinPerformHeight}px`;

      //set height of the wrapper to overflowinto blacktangle
      titinPerformAr[0].style.height = `${vh + titinPerformOffset.height * 2}px`;
      // titinPerformAr[0].style.height = `${vh + spaceInBlackTangle}px`; //LEGACY
   });
   //return height bc height*3 is space above bookNow
   return titinPerformOffset.height;
};

const positionBookNow = (
   bookNowAr: HTMLElement[],
   vh: number,
   titinPerformHeight: number,
) => {
   const spaceAboveBookNow = titinPerformHeight * 3;
   // position book now below TITIN PERFORMANCE
   bookNowAr[0].style.height = `${spaceAboveBookNow}px`;
   // set bookNow height to remanider of page
   // bookNowAr[1].style.height = `${vh - spaceAboveBookNow}px`;
};

const resizeHandler = (
   redSlant: HTMLElement,
   lukePhoto: HTMLElement,
   slogan: HTMLElement,
   titinPerformAr: HTMLElement[][],
) => {
   const [vw, vh] = getVwVh();
   const slantAglRad = rotateRedSlant(redSlant, vw, vh);
   positionLuke(lukePhoto, vw, vh, slantAglRad);
   positionSlogan(slogan, vw, vh, slantAglRad);
   positionTitinPerform(titinPerformAr, vh, slantAglRad);
};

export default resizeHandler;
